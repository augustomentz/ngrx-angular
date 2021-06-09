import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from '@features/products/products-routing.module';
import { ProductComponent } from '@features/products/components/product/product.component';
import { ProductFormComponent } from '@features/products/components/product-form/product-form.component';
import { SharedModule } from '@shared/shared.module';

import { productsFeatureKey, productsReducer } from './store/products.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
  ],
})
export class ProductsModule {}
