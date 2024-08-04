import {Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-basic-btn',
  standalone: true,
    imports: [
        TranslateModule
    ],
  templateUrl: './basic-btn.component.html',
  styleUrl: './basic-btn.component.scss'
})
export class BasicBtnComponent {
  @Input() href: string = '';
}
