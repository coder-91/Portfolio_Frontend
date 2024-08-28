import {Component} from '@angular/core';
import {ProjectComponent} from "./project/project.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [
    ProjectComponent,
    TranslateModule
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
      description: 'projects.join.description',
      hrefLiveTest: '#',
      hrefFrontend: 'https://github.com/coder-91/Join_Frontend',
      hrefBackend: 'https://github.com/coder-91/Join_Backend'
    },
    {
      hrefProjectImage: 'project_2.png',
      title: 'Videoflix',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'CSS', 'HTML', 'Python', 'Django', 'API', 'Redis', 'Git'],
      description: 'projects.videoflix.description',
      hrefLiveTest: '#',
      hrefFrontend: 'https://github.com/coder-91/Videoflix_Frontend',
      hrefBackend: 'https://github.com/coder-91/Videoflix_Backend'
    }
  ];

  public isImageFirst(index: number): boolean {
    return index % 2 === 0;
  }
}
