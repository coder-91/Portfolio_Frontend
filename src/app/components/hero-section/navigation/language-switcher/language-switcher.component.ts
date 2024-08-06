import {Component, OnInit} from '@angular/core';
import {LANGUAGES} from "../../../../consts/const";
import {Language} from "../../../../models/language";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../../../services/languageService/language.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent implements OnInit {
  protected readonly LANGUAGES = LANGUAGES;
  protected readonly Object = Object;
  selectedLanguage: Language = LANGUAGES['GB_EN'];

  constructor(public translateService: TranslateService, private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((selectedLanguage)=> {
       this.selectedLanguage = selectedLanguage;
    })
  }

  public onChangeLanguage(language: Language) {
    this.languageService.setCurrentLanguage(language);
    this.translateService.use(language.code)
  }
}
