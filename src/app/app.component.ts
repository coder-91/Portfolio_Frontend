import {Component, OnInit} from '@angular/core';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {Theme} from "./models/theme";
import {ThemeService} from "./services/themeService/theme.service";
import {HeroContentComponent} from "./components/hero-section/hero-content/hero-content.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroSectionComponent, NavigationComponent, HeroContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Veysel Karaali | Fullstack Developer';
  currentTheme: Theme;

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    })
  }
}
