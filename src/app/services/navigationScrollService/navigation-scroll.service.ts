import { Injectable } from '@angular/core';
import {Subscription} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationScrollService {
  private routerSubscription: Subscription;
  constructor(private router: Router) {}

  public initialize(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes('#')) {
          document.documentElement.style.scrollBehavior = 'smooth';
        } else {
          document.documentElement.style.scrollBehavior = 'auto';
        }
      }
    });
  }

  public destroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
