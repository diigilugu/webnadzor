import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-egis-page',
  templateUrl: './egis-page.component.html',
  styleUrls: ['./egis-page.component.css']
})
export class EgisPageComponent implements OnInit {
  egisForm: FormGroup;
  price = 0;

  constructor(private fb: FormBuilder) {
    this.egisForm = this.fb.group({
      organization: ['', Validators.required],
      isRegistration: ['5000', Validators.required],
      personal: ['1500', Validators.required],
      equipment: ['5000', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      policy: [false, Validators.pattern('true')],
    })
  }

  ngOnInit(): void {
  }

  calculate(): void {
    if (this.egisForm.valid) {
      const personalPrice = parseInt(this.egisForm.get('personal')?.value);
      const equipmentPrice = parseInt(this.egisForm.get('equipment')?.value);
      const registrationPrice = parseInt(this.egisForm.get('isRegistration')?.value);
      this.price = personalPrice + equipmentPrice + registrationPrice;
      console.log(this.egisForm.value);
    }
  }
}
