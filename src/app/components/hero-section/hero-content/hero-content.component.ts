import {Component, OnInit} from '@angular/core';
import {Theme} from "../../../models/theme";
import {ThemeService} from "../../../services/themeService/theme.service";
import {BtnLinkComponent} from "../../../shared/components/buttons/btn-link/btn-link.component";
import {ViewportScroller} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-hero-content',
  standalone: true,
  imports: [
    BtnLinkComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './hero-content.component.html',
  styleUrl: './hero-content.component.scss'
})
export class HeroContentComponent implements OnInit {
  protected readonly Theme = Theme;
  currentTheme: Theme;

  constructor(private themeService: ThemeService, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe( currentTheme=> {
      this.currentTheme = currentTheme;
    })
  }
}
