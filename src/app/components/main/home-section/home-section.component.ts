import {Component, OnInit} from '@angular/core';
import {Theme} from "../../../models/theme";
import {ThemeService} from "../../../services/themeService/theme.service";

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss'
})
export class HomeSectionComponent implements OnInit {
  protected readonly Theme = Theme;
  currentTheme: Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe( currentTheme=> {
      this.currentTheme = currentTheme;
    })
  }
}
