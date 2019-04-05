import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var rsvp_data = JSON.parse(sessionStorage.getItem("rsvp"));

    console.log(rsvp_data);

    if (rsvp_data) {

      $('#time').text(rsvp_data.trip_time);

      $('.rsvp_name').text(rsvp_data.trip_name);
      $('#rsvp_price').text(rsvp_data.trip_price);

    }

    var ride_data = JSON.parse(sessionStorage.getItem("ride"));

    console.log(ride_data);

    if (ride_data) {

      $('#dest_city').text(ride_data.dest_city);

     

    }

  }

}
