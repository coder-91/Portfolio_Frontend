import { Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {HomeSectionComponent} from "./components/main/home-section/home-section.component";
import {AboutMeSectionComponent} from "./components/main/about-me-section/about-me-section.component";
import {SkillsSectionComponent} from "./components/main/skills-section/skills-section.component";
import {ProjectComponent} from "./components/main/projects-section/project/project.component";
import {ContactSectionComponent} from "./components/main/contact-section/contact-section.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'home', component: HomeSectionComponent},
      { path: 'about-me', component: AboutMeSectionComponent },
      { path: 'skills', component: SkillsSectionComponent },
      { path: 'projects', component: ProjectComponent },
      { path: 'contact', component: ContactSectionComponent },
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
