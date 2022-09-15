import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      userQuestion: ['Регистрация в ЕГИСЗ', Validators.required],
      organizationName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userMassage: ['', Validators.required],
      policy: [false, Validators.pattern('true')],
    });
  }

  ngOnInit(): void {
  }

  sendFormData(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
