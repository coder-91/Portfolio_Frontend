import {Component, Input, OnInit} from '@angular/core';
import {Theme} from '../../../models/theme';
import {ThemeService} from "../../../services/themeService/theme.service";
import {NgClass} from "@angular/common";
import {SunIconComponent} from "./sun-icon/sun-icon.component";
import {MoonIconComponent} from "./moon-icon/moon-icon.component";

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [
    NgClass,
    SunIconComponent,
    MoonIconComponent
  ],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent implements OnInit {
  protected readonly Theme = Theme;
  @Input() currentTheme: Theme;
  isLightTheme:boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isLightTheme = !!this.currentTheme;
  }

  public onChangeTheme() {
    this.isLightTheme = !this.isLightTheme;
    const newTheme: Theme = this.currentTheme === Theme.DARK_THEME ? Theme.LIGHT_THEME : Theme.DARK_THEME;
    this.themeService.changeTheme(newTheme);
  }
}
