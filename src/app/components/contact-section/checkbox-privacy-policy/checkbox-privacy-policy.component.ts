import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-checkbox-privacy-policy',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './checkbox-privacy-policy.component.html',
  styleUrl: './checkbox-privacy-policy.component.scss'
})
export class CheckboxPrivacyPolicyComponent {
  @Input() form!: FormGroup;
  @Input() id: string= "";

  get control(): FormControl {
    return this.form.get(this.id) as FormControl;
  }
}
