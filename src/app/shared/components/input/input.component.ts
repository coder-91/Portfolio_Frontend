import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() form!: FormGroup;
  @Input() id: string= "";
  @Input() type: string = 'text';
  @Input() label: string= "";

  get control(): FormControl {
    return this.form.get(this.id) as FormControl;
  }
}
