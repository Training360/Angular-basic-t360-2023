import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

  addItemToCart(item: any, count: number) {
    this.cart.push({ ...item, count });
  }
}
