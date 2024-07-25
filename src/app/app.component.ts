import { Component } from '@angular/core';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroSectionComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
