import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Theme} from "../../models/theme";
import {TranslateModule} from "@ngx-translate/core";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {LogoComponent} from "../../shared/components/logo/logo.component";
import {ThemeService} from "../../services/themeService/theme.service";
import {LanguageSwitcherComponent} from "./language-switcher/language-switcher.component";
import {NgClass} from "@angular/common";
import {NavMobileIconComponent} from "./nav-mobile-icon/nav-mobile-icon.component";
import {MenuListComponent} from "./menu-list/menu-list.component";
import {NavigationService} from "../../services/navigationService/navigation.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TranslateModule, ThemeSwitcherComponent, LogoComponent, LanguageSwitcherComponent, NgClass, NavMobileIconComponent, MenuListComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, AfterViewInit {
  currentTheme: Theme;
  isMobileMenuActive = false;
  @ViewChild('nav') nav: ElementRef;

  constructor(private themeService: ThemeService, private navigationService: NavigationService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })

    this.navigationService.navHeight$.subscribe(height => {
      const mobileMenuListElement = document.querySelector('.menu-mobile');
      this.renderer.setStyle(mobileMenuListElement, 'top', `${height}px`);
    });
  }

  ngAfterViewInit(): void {
    this.navigationService.navHeight = this.nav.nativeElement.offsetHeight;
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
      !this.nav.nativeElement.contains(target)) {
      this.closeMobileMenu();
    }
  }
}
