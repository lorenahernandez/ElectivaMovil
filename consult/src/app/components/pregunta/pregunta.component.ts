import { Component, OnInit, Input } from '@angular/core';
import {ServicioService} from "../../services/servicio.service";
@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  constructor(private _ds:ServicioService) { }
  @Input()
  indexSelected:number;
  ngOnInit() {
  }

}
