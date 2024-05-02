import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required : true}) img : string = '';
  @Input({required : true}) title : string = '';
  @Input({required : true}) price : number = 0;

  @Output() addToCart = new EventEmitter();

  protected addToCartHandler() {
    console.log('Clicked on add to cart');
    this.addToCart.emit(
      'Product added to cart! ' + this.title
    );
  }

}
