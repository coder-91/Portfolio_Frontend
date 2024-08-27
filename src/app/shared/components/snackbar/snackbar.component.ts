import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  @Input() message: string = '';
  @Input() hasError: boolean = false;
  isVisible: boolean = false;

  public show(message: string, hasError: boolean) {
    this.message = message;
    this.hasError = hasError;
    this.isVisible = true;

    if (!hasError) {
      setTimeout(() => {
        this.isVisible = false;
      }, 3000);
    }
  }

  public close() {
    this.isVisible = false;
  }
}
