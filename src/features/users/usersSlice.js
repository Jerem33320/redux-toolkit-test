import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Rick' },
    { id: '1', name: 'Morty' },
    { id: '2', name: 'Jerem' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer