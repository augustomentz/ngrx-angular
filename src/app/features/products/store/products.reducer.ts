import { Product } from '@core/types/product.type';
import { createReducer, on, Action } from '@ngrx/store';
import { create, list, remove, update } from '../store/products.actions';

export const productsFeatureKey = 'products';

export interface State {
  products: Product[];
}

export const initialState: State = {
  products: [{ id: 1, title: 'a', description: 'abc', promotional: true }],
};

const reducer = createReducer(
  initialState,
  on(create, (state: State, action: Action): any => {
    console.log(state);
    console.log(action);
  })
);

export function productsReducer(state: State | undefined, action: Action): any {
  return reducer(state, action);
}
