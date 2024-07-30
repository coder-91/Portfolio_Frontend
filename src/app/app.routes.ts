import { Routes } from '@angular/router';
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {ProjectsComponent} from "./components/projects/projects.component";

export const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];
