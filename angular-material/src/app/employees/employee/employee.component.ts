import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../shared/employee.service';
import { DepartmentService } from './../../shared/department.service';
import { NotificationService } from './../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private service: EmployeeService,
    private departmentService: DepartmentService,
    private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.service.getEmployees();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.onClear();
      this.notificationService.success('Submitted Successfully');
    }
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
