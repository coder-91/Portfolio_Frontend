import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {map, Observable} from "rxjs";

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
}
