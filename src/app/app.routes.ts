import { Routes } from '@angular/router';
import {ImprintSectionComponent} from "./components/main/imprint-section/imprint-section.component";
import {MainComponent} from "./components/main/main.component";
import {PrivacyPolicySectionComponent} from "./components/main/privacy-policy/privacy-policy-section.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'imprint', component: ImprintSectionComponent },
  { path: 'privacy-policy', component: PrivacyPolicySectionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
