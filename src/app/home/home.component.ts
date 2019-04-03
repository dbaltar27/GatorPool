import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#alert").hide();
    $("#sign-up").click(function() {
      //console.log("show");
      $("#alert").show();
    });
    $("#close-alert").click(function() {
      //console.log("close");
      $("#alert").hide();
    });

  }

}
