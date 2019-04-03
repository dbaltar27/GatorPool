import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    
    (<any>$('.date') ).datepicker({
      autoclose: true,
    });

    $( document ).ready(function() {

      var city, state, date;

      $('input').on('keyup blur',function () {
        city = <string>$('#city').val();
        date = <string>$('.date').val();
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
    

=======

    //(<any>$('.date') ).datepicker({
      //autoclose: true,
    //});
>>>>>>> 7a1df019379a97c8ee7c8db4c7d313a8e2ab66b2
  }

}
