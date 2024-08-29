import {Component, Input, OnInit} from '@angular/core';
import {Theme} from '../../../models/theme';
import {ThemeService} from "../../../services/themeService/theme.service";
import {NgClass} from "@angular/common";
import {SafeHtml} from "@angular/platform-browser";
import {forkJoin, map} from "rxjs";
import {SvgLoaderService} from "../../../services/svgLoaderService/svg-loader.service";

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
  svgIcons: { [key: string]: SafeHtml } = {};
  readonly iconsToLoad = {
    light_mode: 'assets/icons/light_mode.svg',
    dark_mode: 'assets/icons/dark_mode.svg'
  };

  constructor(private themeService: ThemeService, private svgLoaderService: SvgLoaderService) {}

  ngOnInit(): void {
    this.isLightTheme = !!this.currentTheme;

    const svgRequests = Object.entries(this.iconsToLoad).map(([key, path]) => {
      return this.svgLoaderService.loadSvg(path).pipe(map(svg => ({ [key]: svg })));
    });

    forkJoin(svgRequests).subscribe(results => {
      results.forEach(result => {
        this.svgIcons = { ...this.svgIcons, ...result };
      });
    });
  }

  public onChangeTheme() {
    this.isLightTheme = !this.isLightTheme;
    const newTheme: Theme = this.currentTheme === Theme.DARK_THEME ? Theme.LIGHT_THEME : Theme.DARK_THEME;
    this.themeService.changeTheme(newTheme);
  }
}
