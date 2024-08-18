import {Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {RouterModule} from '@angular/router';
import {ScrollService} from "../../../services/scrollService/scroll.service";

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    NgClass
  ],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  @Input() isMobileMenuActive: boolean;
  @Input() closeMobileMenu: () => void;

  menuItems = [
    { sectionId: 'homeSection', path: '/home', label: 'home' },
    { sectionId: 'aboutMeSection', path: '/about-me', label: 'aboutMe' },
    { sectionId: 'skillsSection', path: '/skills', label: 'skills' },
    { sectionId: 'projectsSection', path: '/projects', label: 'projects' },
    { sectionId: 'contactSection', path: '/contact', label: 'contact' }
  ];

  constructor(private scrollService: ScrollService) {}

  public handleNavigation(sectionId: string): void {
    if (this.isMobileMenuActive) {
      this.closeMobileMenu();
    }
    this.scrollService.scrollToSection(sectionId)
  }
}
