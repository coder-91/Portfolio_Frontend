import {Component, OnDestroy, OnInit} from '@angular/core';
import {Theme} from "../../models/theme";
import {ThemeService} from "../../services/themeService/theme.service";
import {Router, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {SvgLoaderService} from "../../services/svgLoaderService/svg-loader.service";
import {LogoV2Component} from "./logo-v2/logo-v2.component";
import {GithubIconComponent} from "./github-icon/github-icon.component";
import {EmailIconComponent} from "./email-icon/email-icon.component";
import {LinkedinIconComponent} from "./linkedin-icon/linkedin-icon.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    LogoV2Component,
    GithubIconComponent,
    EmailIconComponent,
    LinkedinIconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  currentTheme: Theme;
  currentYear: number;
  private currentThemeSubscription = new Subscription();

  constructor(private themeService: ThemeService, private router: Router, private svgLoaderService: SvgLoaderService) {
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })
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
