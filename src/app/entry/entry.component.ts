import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent{

  generateEntry(): string{
    var entry = 'something cool';
    return entry;
  }
}
