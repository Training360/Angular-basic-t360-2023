import { Component, Input, inject } from '@angular/core';
import { Guitar } from 'src/app/model/guitar';
import { CartService } from 'src/app/service/cart.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent {
  @Input() guitar: Guitar = new Guitar();
  cartService: CartService = inject(CartService);
  toast: NotificationService = inject(NotificationService);

  count: number = 0;
  buttonText: string = 'Add to cart';
  minCount = 0;

  handleDescreaseCountClick(): void {
    this.count -= 1;

    if (this.count < this.minCount) {
      this.count = this.minCount;
    }
  }

  handleIncreaseCountClick(): void {
    const maxCount = this.guitar.stock;
    this.count += 1;

    if (this.count > maxCount) {
      this.count = maxCount;
    }
  }

  handleCartButtonClick(guitar: any): void {
    const { id } = guitar;
    const item = this.cartService.getItemById(id);

    if (!item && this.count > 0) {
      this.cartService.addItemToCart(guitar, this.count);
      this.buttonText = 'Update cart';
      this.toast.showSuccessWithTimeout('Item has been added to the cart', 'Notification', 3000);
    } else if (item?.stock !== this.count && this.count > 0) {
      this.cartService.changeItemCount(id, this.count);
      this.toast.showUpdatedWithTimeout('Item count has changed', 'Notification', 3000);
    } else if (item && this.count === 0) {
      this.cartService.removeFromCart(id);
      this.buttonText = 'Add to cart';
      this.toast.showDeletedWithTimeout('Item has been deleted from the cart', 'Notification', 3000);
    }
  }
}
