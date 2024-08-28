import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../../../shared/components/input/input.component";
import {TextareaComponent} from "../../../shared/components/textarea/textarea.component";
import {CheckboxPrivacyPolicyComponent} from "./checkbox-privacy-policy/checkbox-privacy-policy.component";
import {NgClass} from "@angular/common";
import {MessageService} from "../../../services/messageService/message.service";
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
  private sendMessageSubscription = new Subscription();
  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      isPrivacyPolicyAccepted: new FormControl(false, [Validators.requiredTrue])
    });
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      const contactFormData: ContactFormData = this.contactForm.value;

      this.sendMessageSubscription = this.messageService.sendMessage(contactFormData).subscribe({
        next: () => {
          this.contactForm.reset();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.sendMessageSubscription.unsubscribe();
  }
}
