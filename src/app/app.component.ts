import {Component, OnInit} from '@angular/core';
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {Theme} from "./models/theme";
import {ThemeService} from "./services/themeService/theme.service";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {ProjectsComponent} from "./components/projects/projects.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroSectionComponent, AboutMeComponent, SkillsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Veysel Karaali | Fullstack Developer';
  currentTheme: Theme;

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })
  }
}
