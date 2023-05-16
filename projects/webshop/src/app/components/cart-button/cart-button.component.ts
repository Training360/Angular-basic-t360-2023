import { Component, Input } from '@angular/core';
import { Guitar } from 'src/app/model/guitar';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent {

  count: number = 0;

  handleDescreaseCountClick(): number {
    return this.count -= 1;
  }

  handleIncreaseCountClick(): number {
    return this.count += 1;
  }

  handleCartButtonClick() {
    // Add cart button logic here
  }
}
