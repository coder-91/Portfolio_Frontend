import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-mobile-icon',
  standalone: true,
  imports: [],
  templateUrl: './nav-mobile-icon.component.html',
  styleUrl: './nav-mobile-icon.component.scss'
})
export class NavMobileIconComponent {
  @Input() isMobileMenuActive: boolean;

  get isOpen(): boolean {
    return this.isMobileMenuActive;
  }
}
