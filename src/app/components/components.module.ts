import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IncrementComponent } from './increment.component';
import { CharComponent } from './char.component';



@NgModule({
  declarations: [
    IncrementComponent,
    CharComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [ IncrementComponent,CharComponent]
})
export class ComponentsModule { }
