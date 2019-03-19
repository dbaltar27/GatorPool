import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {

  constructor(private _location: Location) { }
  
  go_back() {
    this._location.back();
  };

  ngOnInit() {
    
  }

}
