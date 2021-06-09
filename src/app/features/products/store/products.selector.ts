import { createFeatureSelector, createSelector } from '@ngrx/store'

import { ProductsState } from '@core/types/states/product.state';
import { productsFeatureKey } from './products.reducer';

export const selectProductsFeature = createFeatureSelector<ProductsState>(
  productsFeatureKey
);

export const selectProducts = createSelector(
  selectProductsFeature,
  (state: ProductsState) => state.products
);
