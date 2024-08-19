import { Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";

export const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'about-me', component: MainComponent },
  { path: 'skills', component: MainComponent },
  { path: 'projects', component: MainComponent },
  { path: 'contact', component: MainComponent },
  { path: '**', redirectTo: '/home' }
];
