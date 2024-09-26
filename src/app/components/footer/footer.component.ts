import {Component, OnDestroy, OnInit} from '@angular/core';
import {Theme, ThemeService} from "../../services/themeService/theme.service";
import {Router, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {LogoV2Component} from "../shared/logos/logo-v2/logo-v2.component";
import {GithubIconComponent} from "../shared/icons/github-icon/github-icon.component";
import {EmailIconComponent} from "../shared/icons/email-icon/email-icon.component";
import {LinkedinIconComponent} from "../shared/icons/linkedin-icon/linkedin-icon.component";
import {LogoV1Component} from "../shared/logos/logo-v1/logo-v1.component";
import {ScrollService} from "../../services/scrollService/scroll.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    LogoV2Component,
    GithubIconComponent,
    EmailIconComponent,
    LinkedinIconComponent,
    LogoV1Component
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  currentTheme: Theme;
  currentYear: number;
  private currentThemeSubscription = new Subscription();

  constructor(private themeService: ThemeService, private router: Router, private scrollService: ScrollService) {
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })
  }

  public navigateToImprint(): void {
    this.router.navigate(['/imprint']).then(() => {
      window.scrollTo({ top: 0});
    });
  }

  public scrollToHome() {
    this.scrollService.scrollToAnchor("home");
  }

  ngOnDestroy(): void {
    this.currentThemeSubscription.unsubscribe();
  }
}
