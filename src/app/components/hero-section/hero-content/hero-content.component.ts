import {Component, OnInit} from '@angular/core';
import {Theme} from "../../../models/theme";
import {ThemeService} from "../../../services/themeService/theme.service";
import {BasicBtnComponent} from "../../shared/basic-btn/basic-btn.component";

@Component({
  selector: 'app-hero-content',
  standalone: true,
  imports: [
    BasicBtnComponent
  ],
  templateUrl: './hero-content.component.html',
  styleUrl: './hero-content.component.scss'
})
export class HeroContentComponent implements OnInit {
  protected readonly Theme = Theme;
  currentTheme: Theme;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe( currentTheme=> {
      this.currentTheme = currentTheme;
    })
  }


}
