import { Injectable } from '@angular/core';

interface CartItem {
  id: number;
  count: number;
}

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

  addItemToCart(item: any, count: number) {
    this.cart.push({ ...item, count });
  }

  changeItemCount(id: number, count: number): void {
    const index = this.getItemIndexById(id);
    if (index !== -1) {
      this.cart[index].count = count;
    }
  }

  removeFromCart(id: number): void {
    const index = this.getItemIndexById(id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
