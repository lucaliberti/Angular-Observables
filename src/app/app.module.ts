import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Observable01Component } from './observable01/observable01.component';
import { Observable02Component } from './observable02/observable02.component';
import { Observable03Component } from './observable03/observable03.component';
import { Observable04Component } from './observable04/observable04.component';
import { Observable05Component } from './observable05/observable05.component';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent,
    Observable01Component,
    Observable02Component,
    Observable03Component,
    Observable04Component,
    Observable05Component,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
