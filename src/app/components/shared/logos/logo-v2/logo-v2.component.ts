import {Component, OnDestroy, OnInit} from '@angular/core';
import {Language} from "../../../../models/language";
import {Subscription} from "rxjs";
import {LanguageService} from "../../../../services/languageService/language.service";

@Component({
  selector: 'app-logo-v2',
  standalone: true,
  imports: [],
  templateUrl: './logo-v2.component.html',
  styleUrl: './logo-v2.component.scss'
})
export class LogoV2Component implements OnInit, OnDestroy {
  currentLanguage: Language;
  currentLanguageSubscription: Subscription = new Subscription();

  constructor(private languageService: LanguageService) {}
  ngOnInit(): void {
    this.currentLanguageSubscription = this.languageService.currentLanguage$.subscribe(currentLanguage => {
      this.currentLanguage = currentLanguage;
    })
  }

  ngOnDestroy(): void {
    this.currentLanguageSubscription.unsubscribe();
  }
}
