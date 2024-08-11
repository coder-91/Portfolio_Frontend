import { Routes } from '@angular/router';
import {AboutMeSectionComponent} from "./components/about-me-section/about-me-section.component";
import {SkillsSectionComponent} from "./components/skills-section/skills-section.component";
import {ProjectsSectionComponent} from "./components/projects-section/projects-section.component";
import {ContactSectionComponent} from "./components/contact-section/contact-section.component";

export const routes: Routes = [
  { path: 'about-me', component: AboutMeSectionComponent },
  { path: 'skills', component: SkillsSectionComponent },
  { path: 'projects', component: ProjectsSectionComponent },
  { path: 'contact', component: ContactSectionComponent },
  { path: '**', redirectTo: '' }
];
