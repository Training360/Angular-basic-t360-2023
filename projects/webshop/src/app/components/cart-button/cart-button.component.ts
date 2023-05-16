import { Component, Input, inject } from '@angular/core';
import { Guitar } from 'src/app/model/guitar';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent {

  @Input() guitar: Guitar = new Guitar();
  cartService: CartService = inject(CartService);

  count: number = 0;
  buttonText: string = 'Add to cart';

  minCount = 0;

  handleDescreaseCountClick() {
    this.count -= 1;

    if (this.count < this.minCount) {
      this.count = this.minCount;
    }
  }

  handleIncreaseCountClick() {
    const maxCount = this.guitar.stock;
    this.count += 1;

    if (this.count > maxCount) {
      this.count = maxCount;
    }
  }

  handleCartButtonClick(guitar: Guitar) {
    this.cartService.addItemToCart(guitar, this.count);
    this.buttonText = 'Update cart';
    console.log(this.cartService.cart);
  }
}
