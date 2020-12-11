import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user = new User();
  msg = '';

  constructor(private fb: FormBuilder, private _service: RegistrationService, private _router : Router) {
    this.createForm();
  }


  createForm() {
    this.form = this.fb.group({
      email: ['test@email.bg', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(50)], []],
      password: ['test-password', [Validators.required, Validators.minLength(6), Validators.maxLength(50)], []],
    })
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/dashboard'])
      },
      error => {
        console.log("execption occured")
        this.msg = "Моля въведете правилен имейл или парола!";
      }
    );
  }

  ngOnInit(): void {

  }

}

