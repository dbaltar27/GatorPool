import { Component, OnInit } from '@angular/core';
//import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  //private messageSource = new BehaviorSubject<string>('default message');
  //currentMessage = this.messageSource.asObservable();


  constructor() { }

  /*
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  */

  ngOnInit() {
    console.log('hello');


    $('input').on('click keyup select blur',function () {
      if ( $('#name').val() && $('#email').val() && $('#phone').val()) {
        $("#signup"). removeAttr("disabled");
      } 
    });
  
    $('#signup').click(function() {
      var name = <string>$('#name').val();
      console.log(name);
      sessionStorage.setItem("full-name", name);
      console.log("saved name");
    });
  }

}
