import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guitar-price',
  templateUrl: './guitar-price.component.html',
  styleUrls: ['./guitar-price.component.scss']
})
export class GuitarPriceComponent {
  @Input() price: number = 0;

  formatPrice(price: number): string {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })
  }
}

