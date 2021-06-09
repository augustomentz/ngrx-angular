import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store'
import * as ProductActionsType from '../../store/products.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  id: number;
  title = 'Novo produto';
  buttonText = 'Criar';
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private formBuilder: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.id) {
      this.title = 'Editar produto';
      this.buttonText = 'Editar';
    }

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      promotional: [false]
    })
  }

  return(): void {
    this.router.navigate(['/products']);
  }

  submit() {
    const { title, description, promotional } = this.form.value

    this.store.dispatch(ProductActionsType.create({
      id: this.id ? this.id : Math.floor(Math.random() * 1000),
      title,
      description,
      promotional
    }));

    this.return();
  }

  getField(field: string) {
    return this.form.get(field);
  }
}
