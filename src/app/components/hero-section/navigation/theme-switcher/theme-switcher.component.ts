import {Component, Input, OnInit} from '@angular/core';
import {Theme} from '../../../../models/theme';
import {ThemeService} from "../../../../services/themeService/theme.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent implements OnInit {
  protected readonly Theme = Theme;
  @Input() currentTheme: Theme;
  isLightTheme:boolean;

  constructor(private themeService: ThemeService) {

  }

  ngOnInit(): void {
    this.isLightTheme = !!this.currentTheme;
  }


  public onChangeTheme() {
    this.isLightTheme = !this.isLightTheme;
    const newTheme: Theme = this.currentTheme === Theme.DEFAULT ? Theme.LIGHT_THEME : Theme.DEFAULT;
    this.themeService.changeTheme(newTheme);
  }
}
