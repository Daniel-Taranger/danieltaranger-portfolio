import { Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entry-generator',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent{
  data;
    constructor(private http:Http) {
        this.http.get('./assets/data.json')
                .subscribe(res => this.data = res.json());

  }

  getdata() {
    return this.data;
  }

}
