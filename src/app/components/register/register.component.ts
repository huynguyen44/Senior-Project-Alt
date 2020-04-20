import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  loading = false;
  submitted = false;
  Roles: string[] = ['Parent', 'Student', 'Teacher', 'Teacher Assistant'];
  States: string[] = ['AL: Alabama', 'AK: Alaska', 'AZ: Arizona', 'AR: Arkansas', 'CA: California',
    'CO: Colorado', 'CT: Connecticut', 'DE: Delaware', 'DC: District Of Columbia',
    'FL: Florida', 'GA: Georgia', 'HI: Hawaii', 'ID: Idaho', 'IL: Illinois', 'IN: Indiana',
    'IA: Iowa', 'KS: Kansas', 'KY: Kentucky', 'LA: Louisiana', 'ME: Maine', 'MD: Maryland',
    'MA: Massachusetts', 'MI: Michigan', 'MN: Minnesota', 'MS: Mississippi', 'MO: Missouri', 'MT: Montana',
    'NE: Nebraska', 'NV: Nevada', 'NH: New Hampshire', 'NJ: New Jersey', 'NM: New Mexico',
    'NY: New York', 'NC: North Carolina', 'ND: North Dakota', 'OH: Ohio', 'OK: Oklahoma', 'OR: Oregon',
    'PA: Pennsylvania', 'RI: Rhode Island', 'SC: South Carolina', 'SD: South Dakota', 'TN: Tennessee',
    'TX: Texas', 'UT: Utah', 'VT: Vermont', 'VA: Virginia', 'WA: Washington', 'WV: West Virginia',
    'WI: Wisconsin', 'WY: Wyoming'];
  Classes: string[] = ['Viet Ngu I', 'Viet Ngu II', 'Viet Ngu III', 'Viet Ngu IV', 'First Communion',
    'Reconciliation', 'Confirmation', 'Marriage Prep', 'RCIA', 'Bible Study'];

  // matcher = new MyErrorStateMatcher();

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  constructor(public fb: FormBuilder) {
  }

  get roleName() {
    return this.registrationForm.get('roles');
  }

  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value));
  }

  ngOnInit() {
  }

}
