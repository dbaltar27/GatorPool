import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

	
	// value='';
	onClickDrive(city: string, state: string, date: string){
    // this.value = value;
    
		console.log("city " + city);
		console.log("state " + state);
		console.log("date " + date);
		var drive = {
			dest_city: city,
			dest_state: state,
			ride_date: date
		};

    console.log(drive);

		sessionStorage.setItem("drive", JSON.stringify(drive));
	}

	onClickRide(city: string, state: string, date: string){
		var ride = {
			dest_city: city,
			dest_state: state,
			ride_date: date
		};


		sessionStorage.setItem("ride", JSON.stringify(ride));
	}

	

  constructor() { }

  ngOnInit() {

    (<any>$('.date') ).datepicker({
      autoclose: true,
    });

    /*
    $('input').on('click keyup select blur',function () {
      if ( $('#dest_city').val() && $('#dest_state').val() && $('#tripDate').val()) {
        $("#rider_btn"). removeAttr("disabled");
        $("#driver_btn"). removeAttr("disabled");
      } 
    });
    */

  }

}
