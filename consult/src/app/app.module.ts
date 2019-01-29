import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VariablesComponent } from './componets/variables/variables.component';
import {FormsModule} from "@angular/forms";

import { PreguntaComponent } from './components/pregunta/pregunta.component';
import {ServicioService} from "./services/servicio.service";

import {HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    PreguntaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
