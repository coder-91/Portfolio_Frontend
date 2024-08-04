import { Component } from '@angular/core';
import {NavigationComponent} from "./navigation/navigation.component";
import {HeroContentComponent} from "./hero-content/hero-content.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    NavigationComponent,
    HeroContentComponent
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
