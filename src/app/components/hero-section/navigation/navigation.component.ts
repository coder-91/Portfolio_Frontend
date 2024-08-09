import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Theme} from "../../../models/theme";
import {TranslateModule} from "@ngx-translate/core";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {LogoComponent} from "./logo/logo.component";
import {ThemeService} from "../../../services/themeService/theme.service";
import {LanguageSwitcherComponent} from "./language-switcher/language-switcher.component";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, TranslateModule, ThemeSwitcherComponent, LogoComponent, LanguageSwitcherComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{
  currentTheme: Theme

  constructor(private themeService: ThemeService, private viewportScroller: ViewportScroller) {}
  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })
  }

  public scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
