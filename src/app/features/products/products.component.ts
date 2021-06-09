import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@core/types/product.type';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProducts } from './store/products.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  goTo(): void {
    this.router.navigate(['products/product']);
  }
}
