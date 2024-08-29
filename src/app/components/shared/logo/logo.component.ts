import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgOptimizedImage} from "@angular/common";
import {SafeHtml} from "@angular/platform-browser";
import {SvgLoaderService} from "../../../services/svgLoaderService/svg-loader.service";
import {LanguageService} from "../../../services/languageService/language.service";
import {Language} from "../../../models/language";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    TranslateModule,
    NgOptimizedImage
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent implements OnInit, OnDestroy {
  @Input() version: 'v1' | 'v2';
  svgLogos: { [key: string]: SafeHtml } = {};
  logosToLoad: { key: string, path: string, href:string }[] = [];
  currentLanguage: Language;
  currentLanguageSubscription = new Subscription();

  constructor(private svgLoaderService: SvgLoaderService, private languageService: LanguageService) {}

  ngOnInit(): void {
    this.currentLanguageSubscription = this.languageService.currentLanguage$.subscribe(currentLanguage => {
      this.currentLanguage = currentLanguage;

      this.logosToLoad = [
        { key: `logo_${this.version}_${this.currentLanguage.code}`, path: `assets/logos/logo_${this.version}_${this.currentLanguage.code}.svg`, href:"/" }
      ];

      this.svgLoaderService.loadAllSvgs(this.logosToLoad).subscribe(svgLogos => {
        this.svgLogos = svgLogos;
      });
    })
  }

  ngOnDestroy(): void {
    this.currentLanguageSubscription.unsubscribe();
  }
}
