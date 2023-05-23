import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart: CartItem[] = [];

  private getItemIndexById(id: number): number {
    return this.cart.findIndex(item => item.id === id);
  }

  getItemById(id: number): CartItem | undefined {
    return this.cart.find(item => item.id === id);
  }

  addItemToCart(item: any, count: number): void {
    this.cart.push({ ...item, count });
  }

  changeItemCount(id: number, count: number): void {
    const index = this.getItemIndexById(id);
    this.cart[index].count = count;
  }

  removeFromCart(id: number): void {
    const index = this.getItemIndexById(id);
    this.cart.splice(index, 1);
  }

  get totalPrice(): number {
    return this.cart.reduce((prev, curr) => prev + curr.count * curr.price, 0);
  }
}
