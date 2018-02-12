import { Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { EntryComponent} from './entry/entry.component';
import { MenuComponent} from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  myEvent(event) {
    console.log(event);
  }
}
