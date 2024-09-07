import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../../shared/input/input.component";
import {TextareaComponent} from "../../shared/textarea/textarea.component";
import {CheckboxPrivacyPolicyComponent} from "./checkbox-privacy-policy/checkbox-privacy-policy.component";
import {NgClass} from "@angular/common";
import {ContactFormService} from "../../../services/contactFormService/contact-form.service";
import {ContactFormData} from "../../../models/contact-form-data";
import {Subscription} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    TextareaComponent,
    CheckboxPrivacyPolicyComponent,
    NgClass,
    TranslateModule
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent implements OnInit, OnDestroy {
  contactForm: FormGroup = new FormGroup({});
  private formValueChangesSubscription: Subscription;
  private sendMessageSubscription = new Subscription();
  constructor(private fb: FormBuilder, private contactFormService: ContactFormService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      isPrivacyPolicyAccepted: new FormControl(false, [Validators.requiredTrue])
    });

    const savedFormData: ContactFormData | null = this.contactFormService.getFormData();
    if (savedFormData) {
      this.contactForm.patchValue(savedFormData);
    }

    this.formValueChangesSubscription = this.contactForm.valueChanges.subscribe(() => {
      this.onFormChange();
    });
  }

  onFormChange(): void {
    const formData: ContactFormData = this.contactForm.value;
    this.contactFormService.saveFormData(formData);
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      const contactFormData: ContactFormData = this.contactForm.value;

      this.sendMessageSubscription = this.contactFormService.sendMessage(contactFormData).subscribe({
        next: () => {
          this.contactForm.reset();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.formValueChangesSubscription.unsubscribe();
    this.sendMessageSubscription.unsubscribe();
  }
}
