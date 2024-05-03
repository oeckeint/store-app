import {Component, inject, Inject, Input, signal, SimpleChange, SimpleChanges} from '@angular/core';
import {CommonModule} from "@angular/common";
import { RouterLinkWithHref } from "@angular/router";

import {ProductModel} from "../models/product.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkWithHref
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  protected hideSideMenu = signal(true);

  private cartService = inject(CartService);
  protected cartProducts = this.cartService.cartProducts;
  protected cartTotalPrice = this.cartService.cartTotalPrice;

  protected toggleSideMenu() {
    this.hideSideMenu.update( (currentValue) => !currentValue );
  }

}
