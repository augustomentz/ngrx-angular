import { Product } from '@core/types/product.type';
import { createReducer, on, Action } from '@ngrx/store';
import { create, list, remove, update } from '../store/products.actions';

export const productsFeatureKey = 'products';

export interface State {
  products: Product[];
}

export const initialState: State = {
  products: [],
};

const reducer = createReducer(
  initialState,
  on(create, (state: State, payload: Product): State => {
    return {
      ...state,
      products:
      [...state.products,
        {
          id: payload.id,
          title: payload.title,
          description: payload.description,
          promotional: payload.promotional
        }
      ]
    }
  }),
  on(remove, (state: State, { id }): State => {
    const products = state.products.filter((product) => product.id !== id)

    return { ...state, products: [...products] }
  })
);

export function productsReducer(state: State | undefined, action: Action): any {
  return reducer(state, action);
}
