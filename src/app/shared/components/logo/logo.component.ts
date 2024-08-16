import {Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {Theme} from "../../../models/theme";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    TranslateModule,
    NgOptimizedImage
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  protected readonly Theme = Theme;
  @Input() currentTheme: Theme;
  @Input() version: 'v1' | 'v2';
  @Input() width: string = "100";

  public getLogo(): string {
    return `logo_${this.version}_${this.currentTheme}`;
  }
}
