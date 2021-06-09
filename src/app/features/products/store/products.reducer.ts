import { Product } from '@core/types/product.type';
import { ProductsState } from '@core/types/states/product.state';
import { createReducer, on, Action } from '@ngrx/store';
import { create, list, remove, update } from '../store/products.actions';

export const productsFeatureKey = 'products';

export const initialState: ProductsState = {
  products: [],
};

const reducer = createReducer(
  initialState,
  on(create, (state: ProductsState, payload: Product): ProductsState => {
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
  on(remove, (state: ProductsState, { id }): ProductsState => {
    const products = state.products.filter((product: Product) => product.id !== id)

    return { ...state, products: [...products] }
  })
);

export function productsReducer(state: ProductsState | undefined, action: Action): any {
  return reducer(state, action);
}
