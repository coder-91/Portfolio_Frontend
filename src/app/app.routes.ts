import { Routes } from '@angular/router';
import {ImprintComponent} from "./components/main/imprint/imprint.component";
import {MainComponent} from "./components/main/main.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
