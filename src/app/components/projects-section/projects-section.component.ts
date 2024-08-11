import { Component } from '@angular/core';
import {ProjectComponent} from "./project/project.component";

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

}
