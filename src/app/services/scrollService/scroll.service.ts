import {Injectable} from '@angular/core';
import {NavigationService} from "../navigationService/navigation.service";
import {ViewportScroller} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private navigationService: NavigationService, private viewportScroller: ViewportScroller) {}

  public scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navHeight = this.navigationService.navHeight;
      const yPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
}
