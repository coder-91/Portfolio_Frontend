import {Component, OnInit} from '@angular/core';
import {LogoComponent} from "../../shared/components/logo/logo.component";
import {Theme} from "../../models/theme";
import {ThemeService} from "../../services/themeService/theme.service";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        LogoComponent
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentTheme: Theme;
  currentYear: number;

  constructor(private themeService: ThemeService) {
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    })
  }
}
