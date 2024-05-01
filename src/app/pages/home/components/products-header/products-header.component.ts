import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() colNumsCountChange = new EventEmitter<number>();
 sort = 'desc';
 itemsShowCount = 12;
  constructor() { }

  ngOnInit(): void {
  }
  onSortUpdate(newSort: string){
    this.sort = newSort;
  }

  onCountUpdate(newCount: number)
  {
    this.itemsShowCount = newCount;
  }
  onColumnsUpdated(colsNum: number): void
  {
    this.colNumsCountChange.emit(colsNum);
  }
}