import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {Theme, ThemeService} from "../../services/themeService/theme.service";
import {LanguageSwitcherComponent} from "./language-switcher/language-switcher.component";
import {NgClass} from "@angular/common";
import {NavMobileIconComponent} from "./nav-mobile-icon/nav-mobile-icon.component";
import {MenuListComponent} from "./menu-list/menu-list.component";
import {NavigationService} from "../../services/navigationService/navigation.service";
import {Subscription} from "rxjs";
import {LogoV1Component} from "../shared/logos/logo-v1/logo-v1.component";
import {ScrollService} from "../../services/scrollService/scroll.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [TranslateModule, ThemeSwitcherComponent, LanguageSwitcherComponent, NgClass, NavMobileIconComponent, MenuListComponent, LogoV1Component, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, AfterViewInit, OnDestroy {
  currentTheme: Theme;
  isMobileMenuActive = false;
  @ViewChild('nav') nav: ElementRef;
  private currentThemeSubscription = new Subscription();

  constructor(private scrollService: ScrollService, private themeService: ThemeService, private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })
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

  public scrollToHome() {
    this.scrollService.scrollToAnchor("home");
  }

  ngOnDestroy() {
    this.currentThemeSubscription.unsubscribe();
  }
}
