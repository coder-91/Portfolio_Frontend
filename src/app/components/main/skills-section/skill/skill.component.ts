import {Component, Input, OnInit} from '@angular/core';
import {SafeHtml} from "@angular/platform-browser";
import {SvgLoaderService} from "../../../../services/svgLoaderService/svg-loader.service";

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent implements OnInit {
  @Input() imageName: string = '';
  @Input() skillName: string = '';
  public svgContent: SafeHtml;
  constructor(private svgLoaderService: SvgLoaderService) {}

  ngOnInit() {
    this.svgLoaderService.loadSvg(`./assets/skills/${this.imageName}`).subscribe(svgContent => {
      this.svgContent = svgContent;
    })
  }
}
