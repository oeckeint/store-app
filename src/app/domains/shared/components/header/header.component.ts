import {Component, Input, signal, SimpleChange, SimpleChanges} from '@angular/core';
import {CommonModule} from "@angular/common";

import {ProductModel} from "../models/product.model";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required : true}) cartProducts : ProductModel[] = [];
  protected hideSideMenu = signal(true);
  protected totalPrice = signal(0)

  protected toggleSideMenu() {
    this.hideSideMenu.update( (currentValue) => !currentValue );
  }

  protected ngOnChanges(changes : SimpleChanges) {
    if (changes['cartProducts']) {
      this.totalPrice.update(() => {
        return this.cartProducts.reduce((acc, product) => {
          return acc + product.price;
        }, 0);
      });
    }

  }

}
