import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CartReducer } from './state/Cart';
import { UserReducer } from './state/User';

const Store = configureStore({
    reducer: {
      cart: CartReducer,
      user: UserReducer,
      
    },
  });

setupListeners(Store.dispatch);

export default Store;