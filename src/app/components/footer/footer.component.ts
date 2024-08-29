import {Component, OnDestroy, OnInit} from '@angular/core';
import {Theme} from "../../models/theme";
import {ThemeService} from "../../services/themeService/theme.service";
import {Router, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {SafeHtml} from "@angular/platform-browser";
import {SvgLoaderService} from "../../services/svgLoaderService/svg-loader.service";
import {LogoComponent} from "../shared/logo/logo.component";

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
  iconsToLoad = [
    { key: 'github', path: 'assets/icons/github.svg', href:"https://github.com/coder-91" },
    { key: 'email', path: 'assets/icons/email.svg', href:"mailto:veysel-karaali@outlook.de" },
    { key: 'linkedin', path: 'assets/icons/linkedin.svg', href:"https://www.linkedin.com/in/veysel-karaali-4206a124b/" }
  ];

  constructor(private themeService: ThemeService, private router: Router, private svgLoaderService: SvgLoaderService) {
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })

    this.svgLoaderService.loadAllSvgs(this.iconsToLoad).subscribe(icons => {
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
