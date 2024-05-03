import {Component, inject, Inject, signal} from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProductComponent } from "../../components/product/product.component";
import { ProductModel } from "../../../shared/components/models/product.model";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { CartService } from "../../../shared/services/cart.service";
import { ProductService } from "../../../shared/services/product.service";

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

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  protected products = signal<ProductModel[]>([])


  protected ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.update(() => products);
      },
      error: (error) => {
        console.error('Error loading products', error);
      }
    });
  }

  protected addProductToCart(newProduct: ProductModel) {
    this.cartService.addNewProductToCart(newProduct);
  }

}
