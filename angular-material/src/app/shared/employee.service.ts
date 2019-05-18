import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      $key: new FormControl(null),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.pattern('^.+@[^\.].*\.[a-z]{2,}$')]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
      city: new FormControl(''),
      gender: new FormControl('1'),
      department: new FormControl(0),
      hireDate: new FormControl(''),
      isPermanent: new FormControl(false)
    });
   }

}
