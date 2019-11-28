import { Component, OnInit } from '@angular/core';
import { EmployService } from '../employ.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:any;

  constructor(private service:EmployService) { }

  ngOnInit() {
    let observable=this.service.Select();
    observable.subscribe((result)=>{
      console.log(result);
      this.employee=result;

    })
  }

}
