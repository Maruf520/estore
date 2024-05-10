import {
  Component,
  Input,
  OnInit,
  NgModule,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  @Input() product: Product | undefined;
  constructor() {}
  ngOnInit(): void {}
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
