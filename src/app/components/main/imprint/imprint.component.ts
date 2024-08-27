import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {}
