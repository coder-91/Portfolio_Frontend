import {Component} from '@angular/core';
import {SkillComponent} from "./skill/skill.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [
    SkillComponent,
    TranslateModule
  ],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {}
