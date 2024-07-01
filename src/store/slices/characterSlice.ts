import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
}

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacter(state, action) {
            state.id = action.payload.id;
        },
        removeCharacter(state) {
            state.id = '';
        },
    }
});

export const {setCharacter, removeCharacter} = characterSlice.actions;

export default characterSlice.reducer;