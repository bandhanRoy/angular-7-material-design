import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Employee } from "../employees/employee";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  form: FormGroup;
  employee: Employee = {
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: 1,
    department: 0,
    hireDate: "",
    isPermanent: false
  };
  constructor(private firebase: AngularFireDatabase) {
    this.form = new FormGroup({
      $key: new FormControl(null),
      fullName: new FormControl(this.employee.fullName, Validators.required),
      email: new FormControl(this.employee.email, [
        Validators.email,
        Validators.pattern("^.+@[^.].*.[a-z]{2,}$")
      ]),
      mobile: new FormControl(this.employee.mobile, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]),
      city: new FormControl(this.employee.city),
      gender: new FormControl(this.employee.gender),
      department: new FormControl(this.employee.department),
      hireDate: new FormControl(this.employee.hireDate),
      isPermanent: new FormControl(this.employee.isPermanent)
    });
  }

  employeeList: Employee[] = [
    {
      fullName: "Bandhan Roy",
      email: "bandhan.roy1@gmail.com",
      mobile: "909319892",
      city: "Kolkata",
      gender: 1,
      department: 0,
      hireDate: "",
      isPermanent: false
    },
    {
      fullName: "Bandhan Roy",
      email: "bandhan.roy1@gmail.com",
      mobile: "909319892",
      city: "Kolkata",
      gender: 1,
      department: 0,
      hireDate: "",
      isPermanent: false
    },
    {
      fullName: "Bandhan Roy",
      email: "bandhan.roy1@gmail.com",
      mobile: "909319892",
      city: "Kolkata",
      gender: 1,
      department: 0,
      hireDate: "",
      isPermanent: false
    }
  ];

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: "",
      email: "",
      mobile: "",
      city: "",
      gender: "1",
      department: 0,
      hireDate: "",
      isPermanent: false
    });
  }

  getEmployees() {
    return this.employeeList;
    // this.employeeList = this.firebase.list("employees");
    // return this.employeeList.snapshotChanges();
  }

  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent
    });
  }

  updateEmployee(employee) {
    this.employeeList.push(employee.$key, {
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent
    });
  }

  deleteEmployee($key: string) {
    // this.employeeList.splice($key);
  }
}
