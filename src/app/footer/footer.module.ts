import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomComponent } from './bottom/bottom.component';



@NgModule({
  declarations: [
    BottomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BottomComponent
  ]
})
export class FooterModule { }
