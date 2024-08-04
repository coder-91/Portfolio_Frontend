import { Component } from '@angular/core';
import {LANGUAGES} from "../../../../consts/const";
import {Language} from "../../../../models/language";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  protected readonly LANGUAGES = LANGUAGES;
  protected readonly Object = Object;
  selectedLanguage: Language = LANGUAGES['GB_EN'];

  constructor(public translateService: TranslateService) {
  }

  public onChangeLanguage(language: Language) {
    this.selectedLanguage = language;
    this.translateService.use(language.code)
  }


}
