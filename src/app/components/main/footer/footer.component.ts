import {Component, OnDestroy, OnInit} from '@angular/core';
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {Theme} from "../../../models/theme";
import {ThemeService} from "../../../services/themeService/theme.service";
import {Router, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {SafeHtml} from "@angular/platform-browser";
import {SvgLoaderService} from "../../../services/svgLoaderService/svg-loader.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LogoComponent,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  currentTheme: Theme;
  currentYear: number;
  private currentThemeSubscription = new Subscription();
  svgIcons: { [key: string]: SafeHtml } = {};
  readonly iconsToLoad = {
    github: 'assets/icons/github.svg',
    email: 'assets/icons/email.svg',
    linkedin: 'assets/icons/linkedin.svg',
  };

  constructor(private themeService: ThemeService, private router: Router, private svgLoaderService: SvgLoaderService) {
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })

    this.svgLoaderService.loadAllIcons(this.iconsToLoad).subscribe(icons => {
      this.svgIcons = icons;
    });
  }

  public navigateToImprint(): void {
    this.router.navigate(['/imprint']).then(() => {
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy(): void {
    this.currentThemeSubscription.unsubscribe();
  }
}
