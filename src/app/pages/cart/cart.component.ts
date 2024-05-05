import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
cart: Cart = {items:[{
  product: 'https://via.placeholder.com/150',
  name: 'Snikers',
  price: 150,
  id: 1,
  quantity: 10
},{
  product: 'https://via.placeholder.com/150',
  name: 'Snikers',
  price: 150,
  id: 1,
  quantity: 7
}]};
dataSource: Array<CartItem> = [];
  constructor() { }

  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
     'total',
     'action'
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0)
  }

}
