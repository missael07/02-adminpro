import { Injectable } from '@angular/core';
import { lanjuage } from 'src/app/helpers/languaje';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  idiom = new lanjuage();
  menu: any = [
    {
      title: this.idiom.profile,
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

  constructor() { }
}
