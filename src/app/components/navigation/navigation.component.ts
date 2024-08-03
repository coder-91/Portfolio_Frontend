import {Component, Input} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Theme} from "../../models/theme";
import {TranslateModule} from "@ngx-translate/core";
import {ThemeSwitcherComponent} from "../shared/theme-switcher/theme-switcher.component";
import {LogoComponent} from "../shared/logo/logo.component";
import {LanguageSwitcherComponent} from "../shared/language-switcher/language-switcher.component";
import {BasicBtnComponent} from "../shared/basic-btn/basic-btn.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, TranslateModule, ThemeSwitcherComponent, LogoComponent, LanguageSwitcherComponent, BasicBtnComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Input() currentTheme: Theme
}
