import {computed, Injectable, signal} from '@angular/core';
import {ProductModel} from "../components/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts = signal<ProductModel[]>([])
  cartTotalPrice = computed (() => {
      return this.cartProducts().reduce((acc, product) => acc + product.price, 0);
    });

  constructor() { }

  addNewProductToCart(product : ProductModel) {
    this.cartProducts.update((currentValue) => [...currentValue, product]);
  }


}
