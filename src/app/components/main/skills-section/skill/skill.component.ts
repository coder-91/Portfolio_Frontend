import {
  AfterViewInit,
  Component,
  Input,
} from '@angular/core';
import {SafeHtml} from "@angular/platform-browser";
import {SvgLoaderService} from "../../../../services/svgLoaderService/svg-loader.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent implements AfterViewInit {
  @Input() imageName: string = '';
  @Input() skillName: string = '';
  public svgContent$: Observable<SafeHtml>;
  constructor(private svgLoaderService: SvgLoaderService) {}

  ngAfterViewInit(): void {
    this.svgContent$ = this.svgLoaderService.loadSvg(`./assets/images/skills/${this.imageName}`);
  }
}
