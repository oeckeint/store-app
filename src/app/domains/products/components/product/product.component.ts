import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from "@shared/components/models/product.model";
import {CurrencyPipe, DatePipe, UpperCasePipe} from "@angular/common";
import {ReversePipe} from "@shared/pipes/reverse.pipe";
import {TimeAgoPipe} from "@shared/pipes/time-ago.pipe";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    ReversePipe,
    TimeAgoPipe
  ],
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
