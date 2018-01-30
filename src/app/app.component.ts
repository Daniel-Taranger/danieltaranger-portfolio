import { Component } from '@angular/core';
import { EntryComponent} from './entry/entry.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(){
      let entry = new EntryComponent;
      let title = entry.generateEntry();
    }
}
