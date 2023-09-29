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

export const Login = createAction<User>('LOGIN');

export const Logout = createAction('LOGOUT');

export const UserReducer = createReducer<User>(LoadSession(),(b) => {
    b.addCase(Login,(user_state,action) => {
        if (user_state === "Anonymous") {
            return action.payload
        } else {
            return user_state;
        }
    });

    b.addCase(Logout,() => {
        return "Anonymous"
    })
})