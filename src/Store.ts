import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CartReducer } from './state/Cart';
import { UserReducer } from './state/User';
import { api } from './api/api';

const Store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer, // the "/api"
      cart: CartReducer,
      user: UserReducer,
      
    },
    middleware: (getDefault) => (
      getDefault().concat(api.middleware)
    )
  });

setupListeners(Store.dispatch);

export default Store;