import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ProductModel} from "../components/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

    getProducts() {
        return this.http.get<ProductModel[]>('https://api.escuelajs.co/api/v1/products');
    }


}
