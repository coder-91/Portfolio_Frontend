import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Language} from "../../models/language";
import {LANGUAGES} from "../../consts/const";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _currentLanguage$: BehaviorSubject<Language> = new BehaviorSubject<Language>(LANGUAGES['GB_EN']);

  public get currentLanguage$(): Observable<Language> {
    return this._currentLanguage$.asObservable();
  }

  setCurrentLanguage(language: Language) {
    this._currentLanguage$.next(language);
  }
}
