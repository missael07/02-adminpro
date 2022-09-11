import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { lanjuage } from 'src/app/helpers/languaje';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  showMx = localStorage.getItem('lan') === 'ES' ? true : false;
  idiom = new lanjuage();
  constructor(private us: UserService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.us.logOut();    
  }

  changeLanguaje(lan: string) {
    localStorage.setItem('lan', lan);
    this.showMx = localStorage.getItem('lan') === 'ES' ? true : false;
    window.location.reload();
  }
}
