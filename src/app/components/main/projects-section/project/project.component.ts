import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {SvgLoaderService} from "../../../../services/svgLoaderService/svg-loader.service";
import {SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  @Input() isImageFirst = true;
  @Input() hrefProjectImage= "";
  @Input() title= "";
  @Input() technologies: string[] = [];
  @Input() description= "";
  @Input() hrefLiveTest= "";
  @Input() hrefFrontend= "";
  @Input() hrefBackend= "";
  svgContent: SafeHtml;

  constructor(private svgLoaderService: SvgLoaderService) {}

  ngOnInit(): void {
    this.svgLoaderService.loadSvg("assets/icons/github.svg").subscribe(svgContent => {
      this.svgContent = svgContent;
    })
  }
}
