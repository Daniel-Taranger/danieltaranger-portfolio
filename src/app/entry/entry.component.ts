import { Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/dataservice.component';

@Component({
  selector: 'entry-generator',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})

export class EntryComponent {
  data = [];

  toggle = false;
  toggleElements = [];

  toggleSizeFull = "500px";
  toggleSizeSmall= "250px";


  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => this.data = data);
    this.data.sort(this.date_sort_desc);
  }


  parseDates() {
    if(this.data != null ){      
      for (var i = 0, len = this.data.length; i < len; i++) {
        this.data[i].date = this.convert(this.data[i].date );
        console.log(typeof this.data[i].date);
      }
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
    if (date1.date > date2.date) return -1;
    if (date1.date < date2.date) return 1;
    return 0;
  }
  
  date_sort_asc= function (date1, date2) {
    // This is a comparison function that will result in dates being sorted in
    // ASCENDING order.
    if (date1.date < date2.date) return -1;
    if (date1.date > date2.date) return 1;
    return 0;
  }
  
  sortData(sort) {
      if(sort == "oldest"){
        this.data.sort(this.date_sort_asc);
      }else if(sort == "newest"){
        this.data.sort(this.date_sort_desc);
      }else{
        console.log("error");
      }
    }

    expandImage(event) {
      var image = document.getElementById(event.target.id);

      if(image.parentElement.style.height != this.toggleSizeFull){
        for (var i = 0, len = this.toggleElements.length; i < len; i++) {
          this.toggleElements[i].parentElement.style.height = this.toggleSizeSmall;
          this.toggleElements[i].parentElement.style.width = this.toggleSizeSmall;
          this.toggleElements[i].style.height = this.toggleSizeSmall;
          this.toggleElements[i].style.width = this.toggleSizeSmall;
          this.toggleElements.splice(0, 1);
        }

        image.parentElement.style.height = this.toggleSizeFull;
        image.parentElement.style.width = this.toggleSizeFull;
        image.style.height = this.toggleSizeFull;
        image.style.width = this.toggleSizeFull;
        this.toggleElements.push(image);
      } else {
        for (var i = 0, len = this.toggleElements.length; i < len; i++) {
          this.toggleElements[i].parentElement.style.height = this.toggleSizeSmall;
          this.toggleElements[i].parentElement.style.width = this.toggleSizeSmall;
          this.toggleElements[i].style.height = this.toggleSizeSmall;
          this.toggleElements[i].style.width = this.toggleSizeSmall;
          this.toggleElements.splice(0, 1);
        }

        image.parentElement.style.height = this.toggleSizeSmall;
        image.parentElement.style.width = this.toggleSizeSmall;
        image.style.height = this.toggleSizeSmall;
        image.style.width = this.toggleSizeSmall;
        this.toggleElements.push(image);
      }
    }
}