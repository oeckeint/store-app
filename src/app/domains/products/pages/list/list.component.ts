import { Component, signal } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProductComponent } from "../../components/product/product.component";
import { ProductModel } from "../../../shared/components/models/product.model";
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    HeaderComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  protected products = signal<ProductModel[]>([])
  protected cartProducts = signal<ProductModel[]>([])

  constructor() {
    const initialProducts : ProductModel[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=26',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 200,
        image: 'https://picsum.photos/640/640?r=27',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 6',
        price: 300,
        image: 'https://picsum.photos/640/640?r=28',
        creationAt: new Date().toISOString()
      }
    ];

    this.products.update( () => initialProducts);

  }

  protected addProductToCart(newProduct: ProductModel) {
    this.cartProducts.update(
      (cartProducts) => {
                  return [newProduct, ...cartProducts];
                });
  }

}
