import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  url='http://localhost:3000/employees';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onAddEmployee(employeeData: { firstname:string,lastname:string,email:string }, form: NgForm) {
    this.http.post(this.url, employeeData).subscribe((responseData) => {
      // console.log(responseData);
      alert("Employee added Successfully!!");
      form.reset();
    });
  }
  

}
