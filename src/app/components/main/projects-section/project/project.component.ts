import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {GithubIconComponent} from "../../../shared/icons/github-icon/github-icon.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgClass,
    GithubIconComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() isImageFirst = true;
  @Input() hrefProjectImage= "";
  @Input() title= "";
  @Input() technologies: string[] = [];
  @Input() description= "";
  @Input() hrefLiveTest= "";
  @Input() hrefFrontend= "";
  @Input() hrefBackend= "";
}
