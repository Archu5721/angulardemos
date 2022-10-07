import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //declare formgroup variables
  loginForm: FormGroup;

  //declare boolean variable to get from submitted or not?
  submitted : boolean=false;

  constructor(private builder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm= this.builder.group(
      {
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required,Validators.minLength(8)]]
      }
    );
  }
  //when usewr will click on submit button - method will be called
  OnSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid)
    return;
    else
    alert(" login Successfully");
    this.router.navigateByUrl('/admin')
  }
  //to access the form control in a view to display the error
  get f(){
    return this.loginForm.controls;
  }
}