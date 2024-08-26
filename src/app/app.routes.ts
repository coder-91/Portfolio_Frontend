import { Routes } from '@angular/router';
import {ImprintComponent} from "./components/main/imprint/imprint.component";
import {MainComponent} from "./components/main/main.component";
import {PrivacyPolicyComponent} from "./components/main/privacy-policy/privacy-policy.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
