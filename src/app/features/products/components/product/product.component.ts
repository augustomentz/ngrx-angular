import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ProductActionsType from '../../store/products.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() id = 0;
  @Input() title = '';
  @Input() description = '';
  @Input() promotional = false;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  edit(): void {

  }

  delete(): void {
    this.store.dispatch(ProductActionsType.remove({ id: 1 }));
  }
}
