import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: {[id: number]: number} = {1: 400, 3: 335, 4: 350};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  onColNumsCountChange(colsNum: number){
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(category: string){
    console.log(category);
  }
  onAddToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }
}
