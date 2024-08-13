import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Theme} from "../../../models/theme";

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  protected readonly Theme = Theme;
  @Input() currentTheme: Theme
  constructor(public translateService: TranslateService) {}
}
