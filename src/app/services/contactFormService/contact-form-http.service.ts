import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ContactFormData} from "../../models/contact-form-data";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactFormHttpService {
  constructor(private httpClient: HttpClient,) { }

  public sendMessage(contactFormData: ContactFormData):Observable<void> {
    const url = environment.baseUrl + `/api/contact-form/`;
    return this.httpClient.post<void>(url, contactFormData);
  }
}
