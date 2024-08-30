import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {CloseIconComponent} from "../icons/close-icon/close-icon.component";

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [
    NgClass,
    TranslateModule,
    CloseIconComponent
  ],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  @Input() notification: string = '';
  @Input() hasError: boolean = false;
  isVisible: boolean = false;

  public show(notification: string, hasError: boolean) {
    this.notification = notification;
    this.hasError = hasError;
    this.isVisible = true;

    if (!hasError) {
      setTimeout(() => {
        this.isVisible = false;
      }, 4000);
    }
  }

  public close() {
    this.isVisible = false;
  }
}
