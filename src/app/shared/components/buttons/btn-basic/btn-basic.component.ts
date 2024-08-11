import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-btn-basic',
  standalone: true,
  imports: [],
  templateUrl: './btn-basic.component.html',
  styleUrl: './btn-basic.component.scss'
})
export class BtnBasicComponent {
  @Input() type = "button";
  @Output() onClick = new EventEmitter<any>();

  public onClickBtn(event) {
    this.onClick.emit(event);
  }
}
