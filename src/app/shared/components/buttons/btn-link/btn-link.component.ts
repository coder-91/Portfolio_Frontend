import {Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-btn-link',
  standalone: true,
    imports: [
        TranslateModule
    ],
  templateUrl: './btn-link.component.html',
  styleUrl: './btn-link.component.scss'
})
export class BtnLinkComponent {
  @Input() hrefIcon: string = '';
  @Input() href: string = '';
  @Input() openInNewTab: boolean = false;
}
