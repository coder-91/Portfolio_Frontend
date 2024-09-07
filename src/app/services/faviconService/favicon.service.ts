import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaviconService {
  private readonly faviconLink: HTMLLinkElement | null = null;

  constructor() {
    this.faviconLink = document.querySelector("link[rel*='icon']");
  }

  public setFavicon(theme: string): void {
    if (this.faviconLink) {
      this.faviconLink.href = `/assets/images/favicons/favicon_${theme}.ico`;
    }
  }
}
