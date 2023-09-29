import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CartReducer } from './state/Cart';
import { UserReducer } from './state/User';
import { SearchState } from './state/SearchBar';

const Store = configureStore({
    reducer: {
      cart: CartReducer,
      user: UserReducer,
      search: SearchState
    },
  });

setupListeners(Store.dispatch);

export default Store;

export type StoreType = ReturnType<typeof Store.getState>