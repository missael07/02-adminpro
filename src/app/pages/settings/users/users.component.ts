import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { lanjuage } from '../../../helpers/languaje';
import { User } from '../../../models/user/user.model';
import { SearchService } from '../../../services/search.service';
import Swal from 'sweetalert2';
import { displayAlert } from 'src/app/helpers/getError';
import { getMEssage } from 'src/app/helpers/getError';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent implements OnInit {
  idiom = new lanjuage();
  users: User[] = [];
  usersTemp: User[] = [];
  countUsers: number = 0;
  from: number = 0;
  loading: boolean = true;
  noDataFound: boolean = false;
  userDB: User;
  displayDDL?: string = '';
  element: any;
  role: string = '';
  roles: any[] = [];
  impersonate: string = this.idiom.impersonate;
  constructor(
    private us: UserService,
    private ss: SearchService,
    private router: Router
  ) {
    this.userDB = us.user;
    this.role = us.user.role;
  }

  ngOnInit(): void {
    this.loadUsers();
    this.loadRoles();
  }
  loadRoles() {
    this.us.loadRoles().subscribe((resp: any) => {
      console.log(resp);
      this.roles = resp.roles;
    });
  }
  loadUsers(timeOut: number = 3500) {
    this.us.loadUsers(this.from).subscribe(({ total, users }) => {
      setTimeout(() => {
        this.users = users;
        this.usersTemp = users;
        this.countUsers = total;
        this.loading = false;
        this.noDataFound = false;
      }, timeOut);
    });
  }

  changePage(valor: number) {
    if (valor === 0) {
      this.from = valor;
      console.log(1, this.from);
    } else if (valor === -5 && this.from > 0) {
      this.from += valor;
    } else if (
      valor === 5 &&
      this.from < this.countUsers - (this.countUsers % 5)
    ) {
      this.from += valor;
      console.log(3, this.from);
    }

    this.loadUsers(100);
  }

  search(term: string) {
    console.log(term);
    if (term.length === 0) {
      this.users = this.usersTemp;
    } else {
      this.ss.search('users', term).subscribe((resp) => {
        this.users = resp;
        this.countUsers = this.users.length;
        this.loading = false;
        this.noDataFound = false;
      });

      if (this.users.length === 0) {
        setTimeout(() => {
          this.loading = false;
        }, 3500);
      }
    }
  }

  deleteUser(user: User) {
    Swal.fire({
      title: this.idiom.deleteTitle,
      text: this.idiom.deleteSubTitle.replace('{0}', user.name),
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.idiom.confirmMessage,
    }).then((result) => {
      if (result.isConfirmed) {
        this.us.deleteUser(user).subscribe((resp: any) => {
          const msg = getMEssage(resp.msg);
          displayAlert(this.idiom.successTitle, msg, '', 'success');
          this.loadUsers(100);
        });
      }
    });
  }

  changeRole(user: User) {
    this.displayDDL = '';
    this.element = '';

    this.us.changeRole(user).subscribe((resp) => {});
  }

  displayDDl(roleUid: string, uid?: string) {
    this.displayDDL = uid;
    this.element = document.getElementById(roleUid);
    console.log(this.element);
    this.element = roleUid;
  }

  impersonateUser(user: User) {
    Swal.fire({
      title: 'Impersonate',
      text: 'Estas apunto de iniciar sesion como ' + user.name,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.idiom.confirmMessage,
    }).then((result) => {
      if (result.isConfirmed) {
        this.us.impersonateUser(user).subscribe((resp: any) => {
          const { token, user } = resp;
          localStorage.setItem('token', token);
          // this.userDB = user;
          this.userDB.img = user.img;
          this.userDB.name = user.name;
          this.userDB.role = user.role;
          this.userDB.google = user.google;
          this.userDB.uid = user.uid;

          console.log(this.userDB);
          const currentUrl = this.router.url;
          this.router.navigateByUrl('/').then(() => {
            this.router.navigate([currentUrl]);
          });
          // window.location.reload();
        });
      }
    });
  }

  goUserProfilePage(id: string) {
    console.log('test');
    this.router.navigateByUrl(`dashboard/user-profile?id=${id}`);
  }
}
