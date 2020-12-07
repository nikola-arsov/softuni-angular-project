import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-pricing-packets',
  templateUrl: './pricing-packets.component.html',
  styleUrls: ['../app.component.css']
})
export class PricingPacketsComponent implements OnInit {


  form: FormGroup;
  // data: Array<any>;
  data:any;
  id: number;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['test@email.bg', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(50)], []],
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


  // infoFill() {
  //   this.data = [
  //     {
  //       id: 1,
  //       style: 'panel-info',
  //       row1: 'Стартиращ търговец',
  //       row2: '0',
  //       row3: '1 Потребител',
  //       row4: '1 Склад',
  //       row5: '5 Клиента',
  //       row6: '20 Артикула',
  //       row7: '50 Продажби на месец',
  //       row8: '-'
  //     },
  //     {
  //       id: 2,
  //       style: 'panel-success',
  //       row1: 'Малък бизнес',
  //       row2: '5',
  //       row3: '2 Потребител',
  //       row4: '2 Склад',
  //       row5: '20 Клиента',
  //       row6: '50 Артикула',
  //       row7: '400 Продажби на месец',
  //       row8: '-'
  //     },
  //     {
  //       id: 3,
  //       style: 'panel-primary',
  //       row1: 'Среден бизнес',
  //       row2: '9',
  //       row3: '5 Потребител',
  //       row4: '3 Склад',
  //       row5: '50 Клиента',
  //       row6: '200 Артикула',
  //       row7: '1000 Продажби на месец',
  //       row8: 'Интеграция с портали за пазаруване'
  //     },
  //     {
  //       id: 4,
  //       style: 'panel-danger',
  //       row1: 'Неограничен',
  //       row2: '19',
  //       row3: 'Неограничени',
  //       row4: 'Неограничени',
  //       row5: 'Неограничени',
  //       row6: 'Неограничени',
  //       row7: 'Неограничени',
  //       row8: 'Интеграция с портали за пазаруване'
  //     }
  //   ];
  // }

  registerUser() {

  }


  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/findPrices");
    response.subscribe((res)=> this.data= res);
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
