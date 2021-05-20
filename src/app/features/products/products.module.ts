import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from '@features/products/products-routing.module';
import { ProductComponent } from '@features/products/components/product/product.component';
import { ProductFormComponent } from '@features/products/components/product-form/product-form.component';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductFormComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
