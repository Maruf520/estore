import { Component, Input, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
})
export class ProductBoxComponent implements OnInit {
@Input() fullWidthMode = false;
@Output() addToCart = new EventEmitter();

product: Product | undefined = {
id: 1,
title: 'Snikers',
price: 150,
category: 'shoes',
description: 'Description',
image: "https://via.placeholder.com/150"
};
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
