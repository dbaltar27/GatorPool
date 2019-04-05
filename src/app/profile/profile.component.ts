import { Component, OnInit } from '@angular/core';
//import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //message: string;
  

  constructor() { }  //private data: SignupComponent

  ngOnInit() {
    //this.data.currentMessage.subscribe(message => this.message = message)

    $('#profile-name').text(sessionStorage.getItem("full-name"));
    
    var ride_data = JSON.parse(sessionStorage.getItem("ride"));

    console.log(ride_data);

    if (ride_data) {

      $('#target_ride_date').text(ride_data.ride_date);

      $('#target_ride_city').text(ride_data.dest_city);

    }

    
    


  }

}
