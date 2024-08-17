import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Theme} from "../../../models/theme";
import {TranslateModule} from "@ngx-translate/core";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {ThemeService} from "../../../services/themeService/theme.service";
import {LanguageSwitcherComponent} from "./language-switcher/language-switcher.component";
import {NgClass} from "@angular/common";
import {NavMobileIconComponent} from "./nav-mobile-icon/nav-mobile-icon.component";
import {MenuListComponent} from "./menu-list/menu-list.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TranslateModule, ThemeSwitcherComponent, LogoComponent, LanguageSwitcherComponent, NgClass, NavMobileIconComponent, MenuListComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{
  currentTheme: Theme;
  isMobileMenuActive = false;
  @ViewChild('menu') menu: ElementRef;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })
  }

  public toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  public closeMobileMenu() {
    this.isMobileMenuActive = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if(this.isMobileMenuActive &&
      !this.menu.nativeElement.contains(target)) {
      this.closeMobileMenu();
    }
  }
}
