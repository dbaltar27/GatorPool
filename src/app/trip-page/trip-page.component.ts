import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit {

  place = sessionStorage.getItem("drive-city");
  time = sessionStorage.getItem("drive-date");
  seats = sessionStorage.getItem("drive-seats");
  constructor() { }
  
  ngOnInit() {
   
  }

}
