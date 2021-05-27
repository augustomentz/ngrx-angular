import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store'
import * as ProductActionsType from '../../store/products.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  id: number | string;
  title = 'Novo produto';
  buttonText = 'Criar';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.id) {
      this.title = 'Editar produto';
      this.buttonText = 'Editar';
    }
  }

  return(): void {
    this.router.navigate(['/products']);
  }

  submit() {
    this.store.dispatch(ProductActionsType.create({ id: 1, title: 'Produto 1', description: 'Descrição', promotional: true }));
  }
}
