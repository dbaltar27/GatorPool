import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    (<any>$('.date') ).datepicker({
      autoclose: true,
    });

    $( document ).ready(function() {

      var city, state, date;

      $('input').on('keyup blur',function () {
        city = <string>$('#city').val();
        date = <any>$('.date').val();
        state = <string>$('#state').val();
      
      });


      console.log('hello');
    $('#driver-btn').click(function(){
      console.log('click');

      console.log(city);
      console.log(state);
      console.log(date);
      sessionStorage.setItem("city", city);
      sessionStorage.setItem("date", date);
      sessionStorage.setItem("state", state);
      console.log("saved");
    });
  });
    


  }

}
