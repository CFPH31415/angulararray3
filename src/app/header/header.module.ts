import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { BottomComponent } from '../footer/bottom/bottom.component';



@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
   
  ]

})
export class HeaderModule { }
