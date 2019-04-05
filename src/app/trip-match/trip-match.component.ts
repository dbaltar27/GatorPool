import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-match',
  templateUrl: './trip-match.component.html',
  styleUrls: ['./trip-match.component.css']
})
export class TripMatchComponent implements OnInit {
  /*
  saveDetails(scope) {
    console.log('Scope: ', scope);
    
    var name = $(scope).closest('tr').find('td.name');
    var time = $(scope).closest('tr').find('td.time');
    var price = $(scope).closest('tr').find('td.price');

    console.log('Name: ', name);
    console.log('Time: ', time);
    console.log('Price: ', price);
    var trip_details = {trip_name: name, trip_time: time, trip_price: price}
    console.log(trip_details);

    sessionStorage.setItem("details", JSON.stringify(trip_details));
  }
  */
  
  
  constructor(private router: Router) {}

  ngOnInit(this) {

    var drive = JSON.parse(sessionStorage.getItem('drive'));
    //console.log(drive);

    $('.dest_city').text(drive.dest_city);
    $('.trip_date').text(drive.ride_date);


    //get closest name from that table row
    

    $('button.details').click(function(this){
      //var idClicked = e.target.id;
      //console.log('hello');
      var name = $(this).closest('tr').find('td.name')[0].textContent;
      var time = $(this).closest('tr').find('td.time')[0].textContent;
      var price = $(this).closest('tr').find('td.price')[0].textContent;

      //console.log('Name: ', name);
      //console.log('Time: ', time);
      //console.log('Price: ', price);
      var trip_details = {trip_name: name, trip_time: time, trip_price: price}
      //console.log(trip_details);

      sessionStorage.setItem("details", JSON.stringify(trip_details));


    
     
    });

    


  }

  

}
