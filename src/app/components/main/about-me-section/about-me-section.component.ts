import {Component, OnDestroy, OnInit} from '@angular/core';
import {Theme, ThemeService} from "../../../services/themeService/theme.service";
import {Subscription} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from '@angular/router';
import {ScrollService} from "../../../services/scrollService/scroll.service";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule
  ],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent implements OnInit, OnDestroy {
  protected readonly Theme = Theme;
  currentTheme: Theme;
  private currentThemeSubscription = new Subscription();

  constructor(private themeService: ThemeService, private scrollService:ScrollService) {}

  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe( currentTheme=> {
      this.currentTheme = currentTheme;
    })
  }

  public scrollToAnchor(anchor: string) {
    this.scrollService.scrollToAnchor(anchor);
  }

  ngOnDestroy(): void {
    this.currentThemeSubscription.unsubscribe()
  }
}
