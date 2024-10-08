import {Injectable} from '@angular/core';
import {ContactFormData} from "../../models/contact-form-data";
import {ContactFormHttpService} from "./contact-form-http.service";
import {BehaviorSubject, Observable, Subject, tap} from "rxjs";
import {ContactFormResult} from "../../models/contact-form-result";

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private _contactFormResult$ = new Subject<ContactFormResult>();
  private _formData$ = new BehaviorSubject<ContactFormData | null>(null);

  constructor(private contactFormHttpService: ContactFormHttpService) { }

  public get contactFormResult$(): Observable<ContactFormResult> {
    return this._contactFormResult$.asObservable();
  }

  public sendMessage(contactFormData: ContactFormData): Observable<void> {
    return this.contactFormHttpService.sendMessage(contactFormData).pipe(
      tap({
        next: () => {
          this._contactFormResult$.next({ notification: 'contact.submit_success', hasError: false });
        },
        error: () => {
          this._contactFormResult$.next({ notification: 'contact.submit_error', hasError: true });
        }
      })
    );
  }

  public saveFormData(contactFormData: ContactFormData): void {
    this._formData$.next(contactFormData);
  }

  public getFormData(): ContactFormData | null {
    return this._formData$.value;
  }
}
