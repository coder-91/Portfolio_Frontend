import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {
  private _isLoadingSpinnerVisible$ = new BehaviorSubject<boolean>(false);

  public get isLoadingSpinnerVisible$(): Observable<boolean> {
    return this._isLoadingSpinnerVisible$.asObservable();
  }

  public show() {
    this._isLoadingSpinnerVisible$.next(true);
  }

  public hide() {
    this._isLoadingSpinnerVisible$.next(false);
  }
}
