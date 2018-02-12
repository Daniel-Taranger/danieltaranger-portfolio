import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { MenuComponent } from './menu/menu.component';
import { DataService } from './dataservice/dataservice.component';


@NgModule({
  declarations: [AppComponent, EntryComponent, MenuComponent],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
