import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Theme} from '../../../models/theme';
import {ThemeService} from "../../../services/themeService/theme.service";

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  protected readonly Theme = Theme;
  @Input() currentTheme: Theme
  newTheme: Theme;
  isActive = false;

  constructor(private themeService: ThemeService) {
    //this.newTheme = this.themeService.getCurrentTheme();
  }

  public toggleTheme() {
    this.newTheme = this.currentTheme === Theme.DEFAULT ? Theme.DARK_THEME : Theme.DEFAULT;
    this.themeService.setTheme(this.newTheme);
  }

  public toggleActive() {
    this.isActive = !this.isActive;
    this.toggleTheme();
  }
}
