import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-match',
  templateUrl: './trip-match.component.html',
  styleUrls: ['./trip-match.component.css']
})
export class TripMatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var drive = JSON.parse(sessionStorage.getItem('drive'));
    console.log(drive);

    $('#dest_city').text(drive.dest_city);
    $('#trip_date').text(drive.ride_date);
  }

}
