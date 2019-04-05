import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-drivers',
  templateUrl: './view-drivers.component.html',
  styleUrls: ['./view-drivers.component.css']
})
export class ViewDriversComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var rsvp_data = JSON.parse(sessionStorage.getItem("rsvp"));

    console.log(rsvp_data);

    if (rsvp_data) {

      $('#rsvp_time').text(rsvp_data.trip_time);

      $('#rsvp_name').text(rsvp_data.trip_name);

    }

    var ride_data = JSON.parse(sessionStorage.getItem("ride"));

    console.log(ride_data);

    if (ride_data) {

      $('#city').text(ride_data.dest_city);
      $('#date').text(ride_data.ride_date);

    }



  }

}
