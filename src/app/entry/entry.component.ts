import { Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entry-generator',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  data;
    constructor(private http:Http) {
        this.http.get('./assets/data.json')
                .subscribe(res => this.data = res.json());

  }
  
  parseDates() {
    if(this.data != null ){      
      for (var i = 0, len = this.data.length; i < len; i++) {
        this.data[i].date = this.convert(this.data[i].date );
      }
      this.data.sort(this.date_sort_desc);
    }      
  }
  
  convert(str1) {
    var dt1   = parseInt(str1.substring(0,2));
    var mon1  = parseInt(str1.substring(3,5));
    var yr1   = parseInt(str1.substring(6,10));
    var date = new Date(yr1, mon1-1, dt1);
    return date;
  }
  
  date_sort_desc = function (date1, date2) {
    // This is a comparison function that will result in dates being sorted in
    // DESCENDING order.
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0;
  }
  
  date_sort_asc= function (date1, date2) {
    // This is a comparison function that will result in dates being sorted in
    // DESCENDING order.
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  }
  
  sortData(sort) {
      if(sort == "oldest"){
        this.data.sort(this.date_sort_asc);
        console.log("sorted by oldest" + this.data[1].date);
        this.data[1].date;
      }else if(sort == "newest"){
        this.data.sort(this.date_sort_desc);
        console.log("sorted by newest" + this.data[1].date);
      }else{
        console.log("error");
      }
    }
  
    
}
