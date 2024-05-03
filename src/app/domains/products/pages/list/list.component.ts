import {Component, signal} from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductComponent } from "../../components/product/product.component";
import {ProductModel} from "../../../shared/components/models/product.model";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  protected products = signal<ProductModel[]>([])

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
      }
    ];

    this.products.update( () => initialProducts);

  }

  protected fromChild(event: string) {
    console.log('Evento lanzado en padre', event);
  }

}
