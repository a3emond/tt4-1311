import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: any;
  @Output() addToCart = new EventEmitter<any>();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
