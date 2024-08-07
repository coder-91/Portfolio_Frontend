import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Language} from "../../models/language";
import {LANGUAGES} from "../../consts/const";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _currentLanguage$: BehaviorSubject<Language>;

  constructor(private translateService: TranslateService) {
    const savedLanguage = this.loadLanguageFromLocalStorage() || LANGUAGES['en'];
    this._currentLanguage$ = new BehaviorSubject<Language>(savedLanguage);
    this.translateService.use(savedLanguage.code);
  }

  public get currentLanguage$(): Observable<Language> {
    return this._currentLanguage$.asObservable();
  }

  public changeLanguage(language: Language) {
    this.setCurrentLanguage(language);
    this.translateService.use(language.code)
    this.saveLanguageToLocalStorage(language);
  }

  public setCurrentLanguage(language: Language) {
    this._currentLanguage$.next(language);
  }

  private loadLanguageFromLocalStorage(): Language | null {
    const storedLanguageCode = localStorage.getItem('languageCode');
    if (storedLanguageCode && LANGUAGES[storedLanguageCode]) {
      return LANGUAGES[storedLanguageCode];
    }
    return null;
  }

  private saveLanguageToLocalStorage(language: Language): void {
    localStorage.setItem('languageCode', language.code);
  }
}
