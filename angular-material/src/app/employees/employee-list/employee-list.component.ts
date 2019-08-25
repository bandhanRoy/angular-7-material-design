import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
// import { MatTableDataSource } from "@angular/material";
import { Employee } from "../employee";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  dataSource: Employee[] = [];
  displayedColoums: string[] = [
    "fullName",
    "email",
    "mobile",
    "city",
    "gender",
    "department",
    "hireDate",
    "isPermanent"
  ];

  constructor(private employeeListService: EmployeeService) {}

  getAllEmployees() {
    var array = this.employeeListService.getEmployees();
    // var empList = array.map(emp => {
    //   return {
    //     $key: new Date().getTime(),
    //     ...emp
    //   };
    // });
    // console.log(empList);
    console.log(array);
    this.dataSource = array;
  }

  ngOnInit() {
    // setTimeout(() => {
    this.getAllEmployees();
    // }, 5000);
  }
}
