import {Injectable} from '@angular/core';
import {ContactFormData} from "../../models/contact-form-data";
import {ContactFormHttpService} from "./contact-form-http.service";
import {Observable, Subject, tap} from "rxjs";
import {ContactFormResult} from "../../models/contact-form-result";

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private _contactFormResult$ = new Subject<ContactFormResult>();

  constructor(private contactFormHttpService: ContactFormHttpService) { }

  public get contactFormResult$(): Observable<ContactFormResult> {
    return this._contactFormResult$.asObservable();
  }

  public sendEmail(contactFormData: ContactFormData): Observable<void> {
    return this.contactFormHttpService.sendEmail(contactFormData).pipe(
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
}
