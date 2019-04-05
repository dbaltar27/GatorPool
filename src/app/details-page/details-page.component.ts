import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor() { }

  city = sessionStorage.getItem("drive-city");
  date = sessionStorage.getItem("drive-date");
  ngOnInit() {
  }

}
