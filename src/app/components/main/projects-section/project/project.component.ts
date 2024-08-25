import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgClass
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
