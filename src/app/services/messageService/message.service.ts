import { Injectable } from '@angular/core';
import {ContactFormData} from "../../models/contact-form-data";
import {MessageHttpService} from "./message-http.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private messageHttpService: MessageHttpService) { }

  public sendMessage(contactFormData: ContactFormData) {
    this.messageHttpService.sendMessage(contactFormData).subscribe({
      next:() => {
        alert("Message erfolgreich gesendet");
      },
      error:() => {
        alert("Message konnte nicht gesendet werden");
      }
    })
  }
}
