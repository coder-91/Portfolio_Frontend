import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export enum Theme {
  LIGHT = "light",
  DARK = "dark"
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _currentTheme$: BehaviorSubject<Theme>;

  constructor() {
    const savedTheme:Theme = this.loadThemeFromLocalStorage() || Theme.LIGHT;
    this._currentTheme$ = new BehaviorSubject<Theme>(savedTheme);
    document.body.className = savedTheme;
  }

  public get currentTheme$(): Observable<Theme> {
    return this._currentTheme$.asObservable();
  }

  public changeTheme(newTheme: Theme) {
    this.setCurrentTheme(newTheme);
    document.body.className = newTheme;
    this.saveThemeToLocalStorage(newTheme);
  }

  public setCurrentTheme(theme: Theme) {
    this._currentTheme$.next(theme);
  }

  private loadThemeFromLocalStorage(): Theme | null {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && Object.values(Theme).includes(storedTheme as Theme)) {
      return storedTheme as Theme;
    }
    return Theme.LIGHT;
  }

  private saveThemeToLocalStorage(theme: Theme): void {
    localStorage.setItem('theme', theme);
  }
}
