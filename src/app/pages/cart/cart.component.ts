import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { isEmpty } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'Snikers',
        price: 150,
        id: 1,
        quantity: 10,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'Snikers',
        price: 150,
        id: 1,
        quantity: 7,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  constructor(private cartService: CartService, private http: HttpClient) {}

  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
  onClearCart() {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }
  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }
  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
  onCheckOut(): void {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          'pk_test_51PDfW6BoTMqcqEieeK3WTyArdaR5TJy6rGCSsm5elrwrbKqCpcVQ4oo4fjp4vXJG9BmEojgD4vO9LWyWZXJtzW5u00s4vi9n97'
        );
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}
