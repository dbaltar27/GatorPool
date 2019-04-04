import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	onClickMe(){
		console.log("blah");
	}

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(){
  	this.elementRef.nativeElement.querySelector('my-element').addEventListener('click', this.onClick.bind(this));
  }

  onClick(event){
  	console.log();
  }

  ngOnInit() {
  	console.log("getting drive");
  	var sessionDrive = JSON.parse(sessionStorage.getItem("drive"));
  	

  	if(sessionDrive){
  		console.log(sessionDrive);
  		$('#driving-table tr:last').after('<tr><td>'
  			+sessionDrive.ride_date+'</td><td>Gainesville</td><td>'
  			+sessionDrive.dest_city+'</td><td>2/'+sessionDrive.seats
  			+'</td><td><button (click)="onClickMe()" class="btn btn-default" routerLinkActive="active" routerLink="/trip-page">View</button></td></tr>');
  		
  	}
  	else{
  		console.log("no session storage found");
  	}



  	
  }

}

