import {Component, OnInit} from '@angular/core';
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {Theme} from "./models/theme";
import {ThemeService} from "./services/themeService/theme.service";
import {AboutMeSectionComponent} from "./components/about-me-section/about-me-section.component";
import {SkillsSectionComponent} from "./components/skills-section/skills-section.component";
import {ProjectsSectionComponent} from "./components/projects-section/projects-section.component";
import {ContactSectionComponent} from "./components/contact-section/contact-section.component";
import {FooterComponent} from "./components/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroSectionComponent, AboutMeSectionComponent, SkillsSectionComponent, ProjectsSectionComponent, ContactSectionComponent, FooterComponent],
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
