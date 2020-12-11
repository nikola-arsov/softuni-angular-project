import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { RegistrationService } from '../registration.service';
import { User } from '../user';


@Component({
  selector: 'app-pricing-packets',
  templateUrl: './pricing-packets.component.html',
  styleUrls: ['../app.component.css']
})
export class PricingPacketsComponent implements OnInit {


  form: FormGroup;
  data:any;
  id: number;
  user = new User();
  


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, 
    private _service: RegistrationService, private _router: Router) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['test@email.bg', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(50)], []],
      username: ['arsov', [Validators.required, Validators.minLength(4), Validators.maxLength(30)], []],
      passwords: this.fb.group({
        password1: ['test-password', [Validators.required, Validators.minLength(6), Validators.maxLength(50)], []],
        password2: ['test-password', [Validators.required], []],
      }, {validator: this.checkPasswords})
    });
  }


  checkPasswords(form: FormGroup) {
    const pass = form.controls.password1.value;
    const confirmPass = form.controls.password2.value;
    return pass === confirmPass ? null : {notSame: true};
  }

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/login'])
      },
      error => {
        console.log("exeption occured");
      }
    )
  }


  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/findPrices");
    response.subscribe((res)=> this.data= res);
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
