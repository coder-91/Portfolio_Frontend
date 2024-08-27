import {Component, OnDestroy, OnInit} from '@angular/core';
import {LANGUAGES} from "../../../consts/const";
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
  protected readonly LANGUAGES = LANGUAGES;
  protected readonly Object = Object;
  selectedLanguage: Language = LANGUAGES['GB_EN'];
  private currentLanguageSubscription = new Subscription();

  constructor(private languageService: LanguageService) {}

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
