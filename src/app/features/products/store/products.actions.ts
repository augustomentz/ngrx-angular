import { createAction, props } from '@ngrx/store';

import { Product } from '@core/types/product.type';

enum ProductsActionType {
  LIST = '[Products] List',
  CREATE = '[Products] Create',
  UPDATE = '[Products] Update',
  REMOVE = '[Products] Remove',
}

export const list = createAction(ProductsActionType.LIST);
export const create = createAction(ProductsActionType.CREATE, props<Product>());
export const update = createAction(ProductsActionType.UPDATE, props<Product>());
export const remove = createAction(
  ProductsActionType.REMOVE,
  props<{ id: number }>()
);
