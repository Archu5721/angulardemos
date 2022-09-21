import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.submitted = true;
    this.gotoMessage();
  }
  gotoMessage(){
    this.router.navigate(['/message']);
  }
  
}
