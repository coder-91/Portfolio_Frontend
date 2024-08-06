import { Component } from '@angular/core';
import {BasicBtnComponent} from "../shared/basic-btn/basic-btn.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    BasicBtnComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
