import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [],
})
export class ProductsHeaderComponent implements OnInit {
  @Output() colNumsCountChange = new EventEmitter<number>();
  @Output() itemCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = 'desc';
  itemsShowCount = 12;
  constructor() {}

  ngOnInit(): void {}
  onSortUpdate(newSort: string) {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdate(newCount: number) {
    this.itemsShowCount = newCount;
    this.itemCountChange.emit(newCount);
  }
  onColumnsUpdated(colsNum: number): void {
    this.colNumsCountChange.emit(colsNum);
  }
}
