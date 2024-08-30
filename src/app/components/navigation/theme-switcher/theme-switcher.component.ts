import {Component, Input, OnInit} from '@angular/core';
import {Theme} from '../../../models/theme';
import {ThemeService} from "../../../services/themeService/theme.service";
import {NgClass} from "@angular/common";
import {SafeHtml} from "@angular/platform-browser";
import {SvgLoaderService} from "../../../services/svgLoaderService/svg-loader.service";
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
  svgIcons: { [key: string]: SafeHtml } = {};
  iconsToLoad = [
    { key: 'light_mode', path: 'assets/icons/light_mode.svg' },
    { key: 'dark_mode', path: 'assets/icons/dark_mode.svg' }
  ];

  constructor(private themeService: ThemeService, private svgLoaderService: SvgLoaderService) {}

  ngOnInit(): void {
    this.isLightTheme = !!this.currentTheme;
    this.svgLoaderService.loadAllSvgs(this.iconsToLoad).subscribe(icons => {
      this.svgIcons = icons;
    });
  }

  public onChangeTheme() {
    this.isLightTheme = !this.isLightTheme;
    const newTheme: Theme = this.currentTheme === Theme.DARK_THEME ? Theme.LIGHT_THEME : Theme.DARK_THEME;
    this.themeService.changeTheme(newTheme);
  }
}
