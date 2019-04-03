import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

	
	// value='';
	onClickMe(city: string, state: string, date: string){
		// this.value = value;
		console.log("city " + city);
		console.log("state " + state);
		console.log("date" + date);
		var drive = {
			dest_city: city,
			dest_state: state,
			ride_date: date
		};


		sessionStorage.setItem("drive", JSON.stringify(drive));
	}

	

  constructor() { }

  ngOnInit() {

    //(<any>$('.date') ).datepicker({
      //autoclose: true,
    //});

    // $(document).ready(function(){

    window.onload = function(){
    	$("#driver_btn").click(function(){

	    	var x = document.getElementById("tester");

	    	console.log(x);



	    	// console.log("city: " + $("#dest_city").val());

	    });
    // });
	
   }
	    

  }

}
