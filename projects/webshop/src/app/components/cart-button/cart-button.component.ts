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

  handleDescreaseCountClick() {
    this.count -= 1;
  }

  handleIncreaseCountClick() {
    this.count += 1;
  }

  handleCartButtonClick(guitar: Guitar) {
    this.cartService.addItemToCart(guitar, this.count);
    this.buttonText = 'Update cart';
    console.log(this.cartService.cart);
  }
}
