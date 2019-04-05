import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  onClickMe(city: string, date: string, seats: string){
		// this.value = value;
		
    console.log(city);

    sessionStorage.setItem("drive-city", city);
    sessionStorage.setItem("drive-date", date);
    sessionStorage.setItem("drive-seats", seats);

    sessionStorage.setItem("driver", "Jonn Smith");
    sessionStorage.setItem("rider1", "Adam Mckay");
    sessionStorage.setItem("rider2", "Albert Gator");
    sessionStorage.setItem("date", "March 13, 2019");
    console.log(sessionStorage.getItem("drive-city"));
	}

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

