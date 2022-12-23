import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent {

  cursos =[`JavaScript`];
  addDatos(nomcapture:String){
    this.cursos.push(String(nomcapture));
  }
}
