import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './privacy-policy-section.component.html',
  styleUrl: './privacy-policy-section.component.scss'
})
export class PrivacyPolicySectionComponent {

}
