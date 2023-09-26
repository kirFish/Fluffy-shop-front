import { createAction, createReducer } from "@reduxjs/toolkit";
import type {Good} from "./Good";

export type User = {
    login: string,
    avatar: string,
    preferences: Good[]
} | "Anonymous";

const LoadSession = (): User => {
    return "Anonymous"
}

export const login = createAction<[string,string]>('LOGIN');

export const logout = createAction<[string,string]>('LOGOUT');

export const UserReducer = createReducer<User>(LoadSession(),(b) => {
    b.addCase(login,(user_state,action) => {
        if (user_state === "Anonymous") {
            //todo
        } else {
            return user_state;
        }
    });

    b.addCase(logout,() => {
        return "Anonymous"
    })
})