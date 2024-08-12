import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BtnBasicComponent} from "../../shared/components/buttons/btn-basic/btn-basic.component";
import {InputComponent} from "../../shared/components/input/input.component";
import {TextareaComponent} from "../../shared/components/textarea/textarea.component";
import {CheckboxComponent} from "../../shared/components/checkbox/checkbox.component";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BtnBasicComponent,
    InputComponent,
    TextareaComponent,
    CheckboxComponent
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent implements OnInit{
  contactForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl(''),
      privacyPolicy: new FormControl(false, [Validators.requiredTrue])
    });
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
