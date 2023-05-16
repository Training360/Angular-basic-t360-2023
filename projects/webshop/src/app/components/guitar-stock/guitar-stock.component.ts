import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guitar-stock',
  templateUrl: './guitar-stock.component.html',
  styleUrls: ['./guitar-stock.component.scss']
})
export class GuitarStockComponent {
  @Input() stock: number = 0;
}
