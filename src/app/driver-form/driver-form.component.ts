import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {


	@ViewChild('am') AM: ElementRef;
		funAM(){
			this.AM.nativeElement.checked
		}

	@ViewChild('pm') PM: ElementRef;
		funPM(){
			this.PM.nativeElement.checked
		}

	onClickMe(hour: string, minute: string, seats: string){
		console.log("hour: " + hour);
		console.log("minute: " + minute);
		
		var am_pm;

		if(this.AM.nativeElement.checked){
			console.log("AM");
			am_pm = "am";
		}
		else{
			console.log("PM");
			am_pm = "pm";
		}

		var userTime = hour + ":" + minute + "" + am_pm;

		// var drive_details = {
		// 	time: userTime
		// };

		var drive = JSON.parse(sessionStorage.getItem("drive"));
		sessionStorage.removeItem("drive");

		drive["time"] = userTime;
		drive["seats"] = seats;
		sessionStorage.setItem("drive", JSON.stringify(drive));

	};

  constructor(private _location: Location) { }
  
  go_back() {
    this._location.back();
  };

  ngOnInit() {
    
  }

}
