import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-imprint-section',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './imprint-section.component.html',
  styleUrl: './imprint-section.component.scss'
})
export class ImprintSectionComponent {}
