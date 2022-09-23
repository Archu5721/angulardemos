import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  url="http://localhost:3000/admin";
  submitted=false;
  constructor( private formBuilder: FormBuilder,private http: HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username : [''],
      password : ['']

  })
   }
  onSubmit() {
    this.submitted = true;
    this.login();
   
  }
  login(){
    this.http.get<any>(this.url).subscribe(res=>{
      const admin = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password      
      });
      if(admin){
        alert("Login Success,Click Ok to continue!!");
        this.loginForm.reset();
        this.router.navigate(['employee']);
      }else{
        alert("Try Again!!");
      }
    })
  }

}
