import { Injectable } from '@angular/core';
import { lanjuage } from 'src/app/helpers/languaje';
import { User } from '../models/user/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  idiom = new lanjuage();
  public user: User;
  menu: any;
  constructor(private us: UserService) {
    this.user = us.user;
    this.menu = [
    {
      title: this.user.name,
      icon: '',
      class: 'user-profile',
      submenu: [
        { title: 'My Profile', url: '/' },
        { title: 'My Balance', url: '/' },
        { title: 'Inbox', url: '/' },
        { title: this.idiom.accountSettings, url: 'account-settings' },
      ]
    },
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      class: 'user-profile',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'Grafica', url: 'grafica1' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Promesas', url: 'promises' },
        { title: 'RXJS', url: 'rxjs' },

      ]
    },

  ];

  }
  
}
