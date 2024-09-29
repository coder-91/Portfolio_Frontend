import {
  Component,
  Input, OnDestroy, OnInit,
} from '@angular/core';
import {Theme, ThemeService} from "../../../../services/themeService/theme.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent implements OnInit, OnDestroy {
  @Input() skillId: string = '';
  @Input() skillName: string = '';
  protected readonly Theme = Theme;
  currentTheme: Theme;
  private currentThemeSubscription = new Subscription();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentThemeSubscription = this.themeService.currentTheme$.subscribe( currentTheme=> {
      this.currentTheme = currentTheme;
    })
  }

  ngOnDestroy(): void {
    this.currentThemeSubscription.unsubscribe()
  }
}
