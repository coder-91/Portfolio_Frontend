import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _navHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public get navHeight$(): Observable<number> {
    return this._navHeight$.asObservable();
  }

  public get navHeight(): number {
    return this._navHeight$.getValue();
  }

  public set navHeight(height: number) {
    this._navHeight$.next(height);
  }
}
