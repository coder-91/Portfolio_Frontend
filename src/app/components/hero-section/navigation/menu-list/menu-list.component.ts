import {AfterViewInit, Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgClass, ViewportScroller} from "@angular/common";
import {RouterModule} from '@angular/router';
import {NavigationComponent} from "../navigation.component";

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
export class MenuListComponent implements AfterViewInit {
  @Input() isMobileMenuActive: boolean;
  @Input() closeMobileMenu: () => void;
  private navHeight: number;

  constructor(private navigationComponent: NavigationComponent, private viewportScroller: ViewportScroller) {}

  ngAfterViewInit(): void {
    this.navHeight = this.navigationComponent.getNavbarHeight();
  }

  public handleNavigation(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const yOffset = -this.navHeight;
      const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }

    if (this.isMobileMenuActive) {
      this.closeMobileMenu();
    }
  }
}
