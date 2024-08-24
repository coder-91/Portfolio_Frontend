import {Injectable} from '@angular/core';
import {NavigationService} from "../navigationService/navigation.service";
import {ViewportScroller} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private navigationService: NavigationService, private viewportScroller: ViewportScroller) {}

  public scrollToAnchor(anchor: string) {
    const scrollOffset = this.navigationService.navHeight;
    this.viewportScroller.setHistoryScrollRestoration('auto');
    this.viewportScroller.setOffset([0, scrollOffset]);
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
