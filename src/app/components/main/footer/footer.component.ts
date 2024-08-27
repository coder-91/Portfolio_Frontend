import {Component, OnDestroy, OnInit} from '@angular/core';
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {Theme} from "../../../models/theme";
import {ThemeService} from "../../../services/themeService/theme.service";
import {Router, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LogoComponent,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  currentTheme: Theme;
  currentYear: number;
  private currentThemeSubscription = new Subscription();

  constructor(private themeService: ThemeService, private router: Router) {
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
