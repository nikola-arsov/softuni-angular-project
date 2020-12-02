import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['../app.component.css']
})
export class CreateCompanyComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({

      name: ['Elegance', [Validators.required, Validators.minLength(4), Validators.maxLength(50)], []],
      EIK: ['1231231231231', [Validators.required, Validators.minLength(13), Validators.maxLength(15)], []],
      DDS: ['123123', [Validators.required, Validators.minLength(6), Validators.maxLength(15)], []],
      city: ['Sofia', [Validators.required, Validators.minLength(2), Validators.maxLength(20)], []],
      address: ['ul.Konska 1', [Validators.required, Validators.minLength(6)], []],
      MOL: ['Arso', [Validators.required, Validators.minLength(4), Validators.maxLength(50)], []],
      email: ['test@email.bg', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(50)], []]
    });
  }

  ngOnInit(): void {
  }


  registerCompanyHandler() {

  }

  reset() {
    this.form.reset();
  }

}
