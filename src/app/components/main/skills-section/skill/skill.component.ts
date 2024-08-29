import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

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
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadSvg();
  }

  public loadSvg() {
    this.http.get('./assets/skills/'+ this.imageName, { responseType: 'text' })
      .subscribe(data => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
      });
  }
}
