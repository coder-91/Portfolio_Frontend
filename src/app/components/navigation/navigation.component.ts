import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Theme} from "../../models/theme";
import {TranslateModule} from "@ngx-translate/core";
import {ThemeSwitcherComponent} from "../shared/theme-switcher/theme-switcher.component";
import {LogoComponent} from "../shared/logo/logo.component";
import {LanguageSwitcherComponent} from "../shared/language-switcher/language-switcher.component";
import {ThemeService} from "../../services/themeService/theme.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, TranslateModule, ThemeSwitcherComponent, LogoComponent, LanguageSwitcherComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{
  currentTheme: Theme

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    })
  }
}
