import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NotFoundComponent, TagsComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuatity(cartItem.food.id, quantity);
    this.setCart();
  }

  // setter for the cart to pass to the service
  setCart() {
    this.cart = this.cartService.getCart();
  }

  updateQuantity(cartItem: any, change: number) {
    const newQuantity = cartItem.quantity + change;
    if (newQuantity >= 1) {
      cartItem.quantity = newQuantity;
      this.changeQuantity(cartItem, newQuantity);
    }
  }
  payNow(cartItem:any){
    console.log("payable amount",cartItem.totalPrice);
  }
}
