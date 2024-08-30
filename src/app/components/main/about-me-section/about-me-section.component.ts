import {Component, OnDestroy, OnInit} from '@angular/core';
import {Theme, ThemeService} from "../../../services/themeService/theme.service";
import {Subscription} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent implements OnInit, OnDestroy {
  protected readonly Theme = Theme;
  currentTheme: Theme;
  private currentThemeSubscription = new Subscription();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe( currentTheme=> {
      this.currentTheme = currentTheme;
    })
  }

  ngOnDestroy(): void {
    this.currentThemeSubscription.unsubscribe()
  }
}
