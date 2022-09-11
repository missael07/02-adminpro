import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IncrementComponent } from './increment.component';
import { CharComponent } from './char.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    IncrementComponent,
    CharComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [ IncrementComponent,CharComponent, ButtonComponent]
})
export class ComponentsModule { }
