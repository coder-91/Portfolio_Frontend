import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-textarea',
  standalone: true,
    imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() form!: FormGroup;
  @Input() id: string= "";

  get control(): FormControl {
    return this.form.get(this.id) as FormControl;
  }

}
