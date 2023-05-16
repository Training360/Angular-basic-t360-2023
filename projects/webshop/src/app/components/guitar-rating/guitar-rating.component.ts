import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guitar-rating',
  templateUrl: './guitar-rating.component.html',
  styleUrls: ['./guitar-rating.component.scss']
})
export class GuitarRatingComponent {
  @Input() rating: number = 0;

  ratingStars(): string {
    const filledStars = '★'.repeat(this.rating);
    const emptyStars = '☆'.repeat(5 - this.rating);
    return `${filledStars}${emptyStars} (${this.rating})`;
  }
}
