import {Injectable} from '@angular/core';
import {Theme} from "../../models/theme";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _currentTheme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.DEFAULT);

  public get currentTheme$(): Observable<Theme> {
    return this._currentTheme$.asObservable();
  }

  setTheme(theme: Theme) {
    this._currentTheme$.next(theme);
    document.body.className = theme;
  }
}
