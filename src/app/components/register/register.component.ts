import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSubmitted = false;
  Roles: any = ['Parent', 'Student'];
  registrationForm = this.fb.group({
    roleName: [''],
    saintName: [''],
    lastName: [''],
    middleName: [''],
    firstName: [''],
    email: [''],
    address: [''],
    city: [''],
    zipCode: ['']
  });

  constructor(public fb: FormBuilder) {
  }

  get roleName() {
    return this.registrationForm.get('roleName');
  }

  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value));
  }

  ngOnInit(): void {
  }

}
