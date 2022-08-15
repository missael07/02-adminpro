import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Main', pageComing: 'Dashboard'}  },
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress', pageComing: 'Dashboard', path: ''   } },
            { path: 'grafica1', component: Grafica1Component, data: { title: 'Grafica', pageComing: 'Dashboard', path: ''   }  },
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes de Cuenta', pageComing: 'Perfil', path: ''  }  },
            { path: 'promises', component: PromisesComponent, data: { title: 'Promesas', pageComing: 'Dashboard', path: ''   }  },
            { path: 'rxjs', component: RxjsComponent, data: { title: 'RXJS', pageComing: 'Dashboard', path: ''   }  },



        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


