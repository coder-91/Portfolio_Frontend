import {Component} from '@angular/core';
import {HomeSectionComponent} from "./home-section/home-section.component";
import {AboutMeSectionComponent} from "./about-me-section/about-me-section.component";
import {SkillsSectionComponent} from "./skills-section/skills-section.component";
import {ProjectsSectionComponent} from "./projects-section/projects-section.component";
import {ContactSectionComponent} from "./contact-section/contact-section.component";
import {FooterComponent} from "./footer/footer.component";
import {ImprintComponent} from "./imprint/imprint.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HomeSectionComponent,
    AboutMeSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    ImprintComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
