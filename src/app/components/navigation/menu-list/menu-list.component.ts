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

  constructor(private scrollService: ScrollService) {}

  menuItems = [
    { id: 'about-me', path: '/about-me' },
    { id: 'skills', path: '/skills' },
    { id: 'projects', path: '/projects' },
    { id: 'contact', path: '/contact' }
  ];

  public handleNavigation(anchor: string): void {
    if (this.isMobileMenuActive) {
      this.closeMobileMenu();
    }
    this.scrollService.scrollToAnchor(anchor);
  }
}
