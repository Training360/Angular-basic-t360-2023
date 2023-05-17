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
  handleDescreaseCountClick(): void {
    this.count -= 1;
  }

  handleIncreaseCountClick(): void {
    this.count += 1;
  }

  handleCartButtonClick(guitar: Guitar): void {
    const { id } = guitar;
    const item = this.cartService.getItemById(id);

    if (!item && this.count > 0) {
      this.cartService.addItemToCart(guitar, this.count);
      this.buttonText = 'Update cart';
    } else if (item?.count !== this.count && this.count > 0) {
      this.cartService.changeItemCount(id, this.count);
    } else if (item && this.count === 0) {
      this.cartService.removeFromCart(id);
      this.buttonText = 'Add to cart';
    }
  }
}
