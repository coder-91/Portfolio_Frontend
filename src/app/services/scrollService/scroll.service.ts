import {Injectable} from '@angular/core';
import {NavigationService} from "../navigationService/navigation.service";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private navigationService: NavigationService) {}

  public scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navHeight = this.navigationService.navHeight;
      const yPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
}
