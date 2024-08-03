import {Component, Input, OnInit} from '@angular/core';
import {ThemeService} from "../../../services/themeService/theme.service";
import {TranslateService} from "@ngx-translate/core";
import {Theme} from "../../../models/theme";

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent implements OnInit {
  protected readonly Theme = Theme;
  @Input() currentTheme: Theme
  constructor(private themeService: ThemeService, public translateService: TranslateService) {

  }

  public ngOnInit() {
  }

}
