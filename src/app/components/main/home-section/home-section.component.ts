import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {Theme, ThemeService} from "../../../services/themeService/theme.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss'
})
export class HomeSectionComponent implements OnInit, OnDestroy {
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
