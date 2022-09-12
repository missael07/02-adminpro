import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';
import { lanjuage } from 'src/app/helpers/languaje';
import { ProfileComponent } from './profile/profile.component';

const idiom = new lanjuage();
const name = localStorage.getItem('name')
const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '', component: DashboardComponent, data: {
                    title: `${idiom.dashboardTitle}!`,
                    pageComing: 'Dashboard',
                    path: 'profile',
                    currentPage: 'Main',
                }
            },
            {
                path: 'account-settings', component: AccountSettingsComponent, data: {
                    title: idiom.accountSettings,
                    pageComing: idiom.profile,
                    path: 'profile',
                    currentPage: idiom.accountSettings,
                    pathFather: 'profile'
                }
            },
            {
                path: 'grafica1', component: Grafica1Component, data: {
                    title: 'Grafica', pageComing: 'Dashboard', path: 'dashboard',
                    currentPage: idiom.accountSettings,
                    pathFather: 'profile'   }  },
            {
                path: 'profile', component: ProfileComponent, data: {
                    title: idiom.profile, pageComing: idiom.profile,
                    currentPage: idiom.editProfile
                }
            },            
            {
                path: 'progress', component: ProgressComponent, data: {
                    title: 'Progress', pageComing: 'Dashboard', path: 'dashboard',
                    currentPage: 'Progress Bar',
                    pathFather: 'profile'      } },
            {
                path: 'promises', component: PromisesComponent, data: {
                    title: 'Promesas', pageComing: 'Dashboard', path: 'dashboard',
                    currentPage: 'Promesas',
                    pathFather: 'profile'      }  },
            {
                path: 'rxjs', component: RxjsComponent, data: {
                    title: 'RXJS', pageComing: 'Dashboard', path: 'dashboard',
                    currentPage: 'RXJS',
                    pathFather: 'profile'      }  },
        ]
        
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


