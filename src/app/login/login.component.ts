import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }


  createForm(){
    this.form = this.fb.group({
      email: ['test@email.bg', [Validators.required, Validators.email,Validators.minLength(6), Validators.maxLength(50)], []],
      password: ['test-password', [Validators.required, Validators.minLength(6), Validators.maxLength(50)], []],
   })
  }

  ngOnInit(): void {

  }

}

