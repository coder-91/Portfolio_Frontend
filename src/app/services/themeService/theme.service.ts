import {Injectable} from '@angular/core';
import {Theme} from "../../models/theme";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.DEFAULT);
  //private currentTheme:Theme = Theme.DEFAULT;

  public get theme$(): Observable<Theme> {
    return this._theme$.asObservable();
  }

  getCurrentTheme() {
    return this._theme$.getValue();
    //return this.currentTheme;
  }

  setTheme(theme: Theme) {
    //this.currentTheme = theme;
    this._theme$.next(theme);
    document.body.className = theme;
  }
}
