import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    $( document ).ready(function() {
    
 
      var drive = JSON.parse(sessionStorage.getItem('drive'));
      //console.log(drive);

      var details = JSON.parse(sessionStorage.getItem('details'));
      //console.log(details);

      $('.city').text(drive.dest_city);
      $('#date').text(drive.ride_date);

      $('#name').text(details.trip_name);
      $('#time').text(details.trip_time);
      $('#price').text(details.trip_price);

    });
  }

}
