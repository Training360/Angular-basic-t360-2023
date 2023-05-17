import { Component, inject } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cartService: CartService = inject(CartService);

  cart: CartItem[]  = this.cartService.cart;
  totalPrice: number = this.cartService.totalPrice;
}
