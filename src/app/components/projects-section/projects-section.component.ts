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
  projects = [
    {
      hrefProjectImage: 'project_1.png',
      title: 'Join',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'CSS', 'HTML', 'Material Design', 'Python', 'Django', 'API', 'Git'],
      description: 'A task manager inspired by the Kanban system that allows you to create and organize tasks using drag-and-drop functionality, and assign users and categories.',
      hrefLiveTest: '#',
      hrefFrontend: 'https://github.com/coder-91/Join_Frontend',
      hrefBackend: 'https://github.com/coder-91/Join_Backend'
    },
    {
      hrefProjectImage: 'project_2.png',
      title: 'Videoflix',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'CSS', 'HTML', 'Python', 'Django', 'API', 'Redis', 'Git'],
      description: 'A video streaming service offering a seamless viewing experience similar to Netflix.',
      hrefLiveTest: '#',
      hrefFrontend: 'https://github.com/coder-91/Videoflix_Frontend',
      hrefBackend: 'https://github.com/coder-91/Videoflix_Backend'
    }
  ];

  public isImageFirst(index: number): boolean {
    return index % 2 === 0;
  }
}
