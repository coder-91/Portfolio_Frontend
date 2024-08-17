import {Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgClass, ViewportScroller} from "@angular/common";
import {RouterModule} from '@angular/router';

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

  constructor(private viewportScroller: ViewportScroller) {}

  public handleNavigation(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
    if (this.isMobileMenuActive) {
      this.closeMobileMenu();
    }
  }
}
