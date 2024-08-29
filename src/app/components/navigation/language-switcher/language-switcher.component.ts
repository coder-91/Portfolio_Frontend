import {Component, OnDestroy, OnInit} from '@angular/core';
import {Language} from "../../../models/language";
import {LanguageService} from "../../../services/languageService/language.service";
import {NgClass} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  selectedLanguage: Language = this.languageService.getSupportedLanguages()['en'];
  private currentLanguageSubscription = new Subscription();

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.currentLanguageSubscription = this.languageService.currentLanguage$.subscribe((selectedLanguage)=> {
       this.selectedLanguage = selectedLanguage;
    })
  }

  public onChangeLanguage(language: Language) {
    this.languageService.changeLanguage(language)
  }

  ngOnDestroy(): void {
    this.currentLanguageSubscription.unsubscribe();
  }
}
