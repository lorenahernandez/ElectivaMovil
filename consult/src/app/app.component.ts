import { Component } from '@angular/core';
import {ServicioService} from "./services/servicio.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consult';
  selected=0;
  constructor( private _ds:ServicioService){ }
onChange(index :number){
	this.selected=index;
}
}
