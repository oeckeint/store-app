import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from "@shared/components/models/product.model";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required : true}) product! : ProductModel;

  @Output()  addToCart = new EventEmitter();

  protected addToCartHandler() {
    this.addToCart.emit(this.product);
  }

}
