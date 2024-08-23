import {Component, OnInit} from '@angular/core';
import {Theme} from "../../../models/theme";
import {ThemeService} from "../../../services/themeService/theme.service";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent implements OnInit {
  protected readonly Theme = Theme;
  currentTheme: Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe( currentTheme=> {
      this.currentTheme = currentTheme;
    })
  }
}
