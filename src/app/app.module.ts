import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { MenuComponent } from './menu/menu.component';
import { DataserviceComponent } from './dataservice/dataservice.component';


@NgModule({
  declarations: [AppComponent, EntryComponent, MenuComponent, DataserviceComponent],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
