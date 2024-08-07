import { Component } from '@angular/core';
import {Theme} from "../../models/theme";
import {SkillComponent} from "../shared/skill/skill.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SkillComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  protected readonly Theme = Theme;
}
