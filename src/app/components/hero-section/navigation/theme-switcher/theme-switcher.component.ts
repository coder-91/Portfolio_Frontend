import {Component, Input} from '@angular/core';
import {Theme} from '../../../../models/theme';
import {ThemeService} from "../../../../services/themeService/theme.service";

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  protected readonly Theme = Theme;
  @Input() currentTheme: Theme;
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  public toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const newTheme: Theme = this.currentTheme === Theme.DEFAULT ? Theme.DARK_THEME : Theme.DEFAULT;
    this.themeService.setTheme(newTheme);
  }
}
