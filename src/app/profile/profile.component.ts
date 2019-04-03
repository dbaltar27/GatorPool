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
  }

}
