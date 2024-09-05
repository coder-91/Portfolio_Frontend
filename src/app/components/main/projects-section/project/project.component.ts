import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {GithubIconComponent} from "../../../shared/icons/github-icon/github-icon.component";
import {ImageSliderComponent} from "../../../shared/image-slider/image-slider.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgClass,
    GithubIconComponent,
    ImageSliderComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() isImageFirst = true;
  @Input() projectImagesPath= [""];
  @Input() title= "";
  @Input() technologies: string[] = [];
  @Input() description= "";
  @Input() hrefLiveTest= "";
  @Input() hrefFrontend= "";
  @Input() hrefBackend= "";
}
