import { Component } from '@angular/core';
import {BasicBtnComponent} from "../../shared/basic-btn/basic-btn.component";

@Component({
  selector: 'app-hero-content',
  standalone: true,
    imports: [
        BasicBtnComponent
    ],
  templateUrl: './hero-content.component.html',
  styleUrl: './hero-content.component.scss'
})
export class HeroContentComponent {

}
