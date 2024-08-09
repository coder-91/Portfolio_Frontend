import {Component, Input} from '@angular/core';
import {BasicBtnComponent} from "../basic-btn/basic-btn.component";

@Component({
  selector: 'app-project',
  standalone: true,
    imports: [
        BasicBtnComponent
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
