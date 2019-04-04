import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	var sessionDrive = JSON.parse(sessionStorage.getItem("drive"));
  	

  	if(sessionDrive){
  		document.getElementById("target-date").innerHTML = sessionDrive.ride_date;
  		document.getElementById("target-dest").innerHTML = sessionDrive.dest_city;
  		document.getElementById("target-seat").innerHTML = "2/"+sessionDrive.seats;		
  	}
  	else{
  		console.log("no session storage found");
  	}



  	
  }

}

