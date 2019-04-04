import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {

  constructor() { }
  


  trip_driver = sessionStorage.getItem("driver");
  other_rider_1 = sessionStorage.getItem("rider1");
  other_rider_2 = sessionStorage.getItem("rider2");
  trip_date = sessionStorage.getItem("date");

  ngOnInit() {
  }

}
