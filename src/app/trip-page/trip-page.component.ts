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
  }

  ShowHide(){
    this.isVisible = true;
  }



}
