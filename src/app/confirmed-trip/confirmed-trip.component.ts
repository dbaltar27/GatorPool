import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmed-trip',
  templateUrl: './confirmed-trip.component.html',
  styleUrls: ['./confirmed-trip.component.css']
})
export class ConfirmedTripComponent implements OnInit {

  constructor() { }

  trip_driver = sessionStorage.getItem("driver");
  other_rider_1 = sessionStorage.getItem("rider1");
  other_rider_2 = sessionStorage.getItem("rider2");
  trip_date = sessionStorage.getItem("date");
  dest_city = sessionStorage.getItem("drive-city");
  dept_time = sessionStorage.getItem("drive-date");
  seats = sessionStorage.getItem("drive-seats");

  
  ngOnInit() {
  }

}
