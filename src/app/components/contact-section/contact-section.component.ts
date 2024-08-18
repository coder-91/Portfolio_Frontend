import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../../shared/components/input/input.component";
import {TextareaComponent} from "../../shared/components/textarea/textarea.component";
import {CheckboxPrivacyPolicyComponent} from "./checkbox-privacy-policy/checkbox-privacy-policy.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    TextareaComponent,
    CheckboxPrivacyPolicyComponent,
    NgClass
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      privacyPolicy: new FormControl(false, [Validators.requiredTrue])
    });
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
