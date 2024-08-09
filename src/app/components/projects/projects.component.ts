import { Component } from '@angular/core';
import {ProjectComponent} from "../shared/project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
