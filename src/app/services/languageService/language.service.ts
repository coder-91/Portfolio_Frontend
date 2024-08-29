import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Language} from "../../models/language";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly supportedLanguages: { [key: string]: Language } = {
    en: {
      code: 'en',
      languageShort: 'EN',
      language: 'English'
    },
    de: {
      code: 'de',
      languageShort: 'DE',
      language: 'Deutsch',
    }
  };
  private _currentLanguage$: BehaviorSubject<Language>;

  constructor(private translateService: TranslateService) {
    const savedLanguage = this.loadLanguageFromLocalStorage() || this.supportedLanguages['en'];
    this._currentLanguage$ = new BehaviorSubject<Language>(savedLanguage);
    this.translateService.use(savedLanguage.code);
  }

  public getSupportedLanguages(): Language[] {
    return Object.values(this.supportedLanguages);
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
    if (storedLanguageCode && this.supportedLanguages[storedLanguageCode]) {
      return this.supportedLanguages[storedLanguageCode];
    }
    return null;
  }

  private saveLanguageToLocalStorage(language: Language): void {
    localStorage.setItem('languageCode', language.code);
  }
}
