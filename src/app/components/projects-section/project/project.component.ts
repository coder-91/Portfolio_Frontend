import {Component, Input} from '@angular/core';
import {BtnLinkComponent} from "../../../shared/components/buttons/btn-link/btn-link.component";

@Component({
  selector: 'app-project',
  standalone: true,
    imports: [
        BtnLinkComponent
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
