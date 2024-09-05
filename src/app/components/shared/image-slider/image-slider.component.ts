import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  @Input() projectImagesPath: string[] = [];

  currentIndex: number = 0;

  public prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.projectImagesPath.length - 1 : this.currentIndex - 1;
  }

  public nextSlide() {
    this.currentIndex = (this.currentIndex === this.projectImagesPath.length - 1) ? 0 : this.currentIndex + 1;
  }

  public goToSlide(index: number) {
    this.currentIndex = index;
  }
}
