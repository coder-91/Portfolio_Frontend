import {Injectable} from '@angular/core';
import {ContactFormData} from "../../models/contact-form-data";
import {MessageHttpService} from "./message-http.service";
import {Observable, Subject, tap} from "rxjs";
import {MessageResult} from "../../models/message-result";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messageResult$ = new Subject<MessageResult>();

  constructor(private messageHttpService: MessageHttpService) { }

  public get messageResult$(): Observable<MessageResult> {
    return this._messageResult$.asObservable();
  }

  public sendMessage(contactFormData: ContactFormData): Observable<void> {
    return this.messageHttpService.sendMessage(contactFormData).pipe(
      tap({
        next: () => {
          this._messageResult$.next({ message: 'Message erfolgreich gesendet', hasError: false });
        },
        error: () => {
          this._messageResult$.next({ message: 'Message konnte nicht gesendet werden', hasError: true });
        }
      })
    );
  }
}
