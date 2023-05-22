import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent {
   @Input() message: string = '';
   @Output() buttonWasClicked = new EventEmitter<void>();

   onButtonClick() {
     this.buttonWasClicked.emit();
   }

  cartService: CartService = inject(CartService);

  cartContent = this.cartService.cart;

  totalCount(): number {
    return this.cartContent.reduce((prev, curr) => prev + curr.count, 0);
  }
}
