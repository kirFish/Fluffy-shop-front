import { createAction, createReducer } from "@reduxjs/toolkit"

export const Search = createAction<string>('SEARCH');

export const ResetSearch = createAction('RESET_SEARCH');

export const SearchState = createReducer("",(b) => {
    b.addCase(Search, (_, action) => {
        return action.payload
    });

    b.addCase(ResetSearch,() => {
        return ""
    })
})