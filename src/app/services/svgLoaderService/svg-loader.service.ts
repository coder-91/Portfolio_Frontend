import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {forkJoin, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SvgLoaderService {
  private svgIcons: { [key: string]: SafeHtml } = {};
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  public loadSvg(path: string): Observable<SafeHtml> {
    return this.http.get(`${path}`, { responseType: 'text' })
      .pipe(
        map(data => this.sanitizer.bypassSecurityTrustHtml(data))
      );
  }

  public loadAllIcons(iconsToLoad: { [key: string]: string }): Observable<{ [key: string]: SafeHtml }> {
    const svgRequests = Object.entries(iconsToLoad).map(([key, path]) => {
      return this.loadSvg(path).pipe(map(svg => ({ [key]: svg })));
    });

    return forkJoin(svgRequests).pipe(
      map(results => {
        results.forEach(result => {
          this.svgIcons = { ...this.svgIcons, ...result };
        });
        return this.svgIcons;
      })
    );
  }
}
