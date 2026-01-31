import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

type CartItem = {
  product: any;
  quantity: number;
};

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  products = [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 7.99 },
    { id: 3, name: 'Product C', price: 3.99 }
  ];

  cart: CartItem[] = [];

  onAddToCart(product: any) {
    const item = this.cart.find(i => i.product.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  increaseQuantity(productId: number) {
    const item = this.cart.find(i => i.product.id === productId);
    if (item) item.quantity++;
  }

  decreaseQuantity(productId: number) {
    const item = this.cart.find(i => i.product.id === productId);
    if (!item) return;

    item.quantity--;
    if (item.quantity <= 0) {
      this.onRemoveFromCart(productId);
    }
  }

  onRemoveFromCart(productId: number) {
    this.cart = this.cart.filter(i => i.product.id !== productId);
  }

  get total() {
    return this.cart.reduce(
      (sum, i) => sum + i.product.price * i.quantity,
      0
    );
  }
}
