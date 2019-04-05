import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit {

  public isVisible = false;

  constructor() { }
  
  ngOnInit() {
    var sessionDrive = JSON.parse(sessionStorage.getItem("drive"));
  	

  	if(sessionDrive){
  		document.getElementById("target-date").innerHTML = sessionDrive.ride_date;
  		document.getElementById("target-dest").innerHTML = sessionDrive.dest_city;
      document.getElementById("target-seat").innerHTML = "2/"+sessionDrive.seats;		
      document.getElementById("target-time").innerHTML = sessionDrive.time;
  	}
  	else{
  		console.log("no session storage found");
  	}
   
  }

  ShowHide(){
    this.isVisible = true;
  }



}
