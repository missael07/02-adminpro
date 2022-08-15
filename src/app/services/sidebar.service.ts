import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Perfil',
      icon: '',
      class: 'user-profile',
      submenu: [
        { title: 'My Profile', url: '/' },
        { title: 'My Balance', url: '/' },
        { title: 'Inbox', url: '/' },
        { title: 'Account Setting', url: 'account-settings' },
        { title: 'Logout', url: '/login' },
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
