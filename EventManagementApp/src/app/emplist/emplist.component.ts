import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ApiService } from '../service/api.service';
import { EmployeeModel } from './emp.model';
import { EmployeeData } from './empdata.model';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  employeeModelObj:EmployeeModel=new EmployeeModel();
  public loginForm!: FormGroup;
  fetchedEmployees:EmployeeData[]=[];
  url='http://localhost:3000/employees';

  constructor(private http:HttpClient,private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      firstname : [''],
      lastname : [''],
      email : ['']

  })
     this.fetchEmployees();
  }

  get(){
    
    this.fetchEmployees();
  }


  fetchEmployees() {
    this.http
      .get(this.url)
      .pipe(
        map((responseData) => {
          const empArray: EmployeeData[] = [];
          for (const key in responseData) {
            var x = { ...responseData[key] };
            empArray.push(x);
          }
          return empArray;
        })
      )
      .subscribe((emps) => {
        this.fetchedEmployees = emps;
      });
  }
  //delete
  DeleteEmployee(id: number) {
    this.http.delete(this.url + '/' + id).subscribe((response) => {
      console.log('Post deleted: ' + response);
      alert("Employee Deleted!!");
      this.fetchEmployees();
    });
  }

  onEdit(emp:any){
    this.employeeModelObj.id=emp.id;
    this.loginForm.controls['firstname'].setValue(emp.first_name);
    this.loginForm.controls['lastname'].setValue(emp.last_name);
    this.loginForm.controls['email'].setValue(emp.email);
  }
  updateEmployee(){
    this.employeeModelObj.first_name=this.loginForm.value.firstname;
    this.employeeModelObj.last_name=this.loginForm.value.lastname;
    this.employeeModelObj.email=this.loginForm.value.email;

    this.api.UpdateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      alert("Updated SuccessFully!!");
      this.loginForm.reset();
      this.fetchEmployees();
    })
  }


}
