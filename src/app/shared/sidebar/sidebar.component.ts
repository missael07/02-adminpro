import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

import { lanjuage } from 'src/app/helpers/languaje';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  idiom = new lanjuage();

  constructor(private sidebarService: SidebarService) {
    this.menuItems = this.sidebarService.menu;
  }

  ngOnInit(): void {
  }

}
