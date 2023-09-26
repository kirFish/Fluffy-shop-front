import { createAction, createReducer } from "@reduxjs/toolkit";
import { Good } from "./Good"

export type Cart = {
    goods: [Good,number][]
}

export const add_to_cart = createAction<Good>('ADD_TO_CART');

export const increase_no_in_cart = createAction<number>('INCREASE_AMMOUNT');

export const decrease_no_in_cart = createAction<number>('DECREASE_AMMOUNT');

export const CartReducer = createReducer<Cart>({goods: []}, (b) => {
    b.addCase(add_to_cart,(state,action) => {
        let goods = [...state.goods];
        goods.push([action.payload,1]);
        return { goods }
    });

    b.addCase(increase_no_in_cart,(state,action) => {
        let goods = [...state.goods];
        goods[action.payload][1] +=1;
        return { goods }
    });

    b.addCase(decrease_no_in_cart,(state,action) => {
        let goods = [...state.goods];
        goods[action.payload][1] -=1;
        return { goods }
    });
})
