import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {forkJoin, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SvgLoaderService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  public loadSvg(path: string): Observable<SafeHtml> {
    return this.http.get(`${path}`, { responseType: 'text' })
      .pipe(
        map(data => this.sanitizer.bypassSecurityTrustHtml(data))
      );
  }

  public loadAllSvgs(iconsToLoad: { key: string, path: string }[]): Observable<{ [key: string]: SafeHtml }> {
    const svgRequests = iconsToLoad.map(icon =>
      this.loadSvg(icon.path).pipe(map(svg => ({ [icon.key]: svg })))
    );

    return forkJoin(svgRequests).pipe(
      map(results => {
        return results.reduce((acc, result) => ({ ...acc, ...result }), {});
      })
    );
  }
}
