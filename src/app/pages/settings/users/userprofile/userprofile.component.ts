import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { UserService } from '../../../../services/user.service';
import { lanjuage } from '../../../../helpers/languaje';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  userId: string = '';
  user!: User;
  idiom = new lanjuage();
  userFilled = false;

  constructor(private route: ActivatedRoute, private us: UserService) {
    this.user = new User('', '', '', '', '', false, '', '');
  }

  ngOnInit(): void {
    this.getQueryParams();

    this.getUser();
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      console.log(params); // { orderby: "price" }
      this.userId = params['id'];
      console.log(this.userId); // price
    });
  }

  getUser() {
    this.us.getUser(this.userId).subscribe((resp: User) => {
      // console.log(resp.user);
      this.user = resp;
      console.log(this.user);
      this.userFilled = true;
      console.log(this.user.imageURL);
    });
  }
}
