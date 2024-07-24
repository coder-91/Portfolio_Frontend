import {Injectable} from '@angular/core';
import {Theme} from "../../models/enums/theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme:Theme = Theme.DEFAULT;

  setTheme(theme: Theme) {
    this.currentTheme = theme;
    document.body.className = theme;
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}
