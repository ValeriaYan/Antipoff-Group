import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    saveValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { saveValue } = searchSlice.actions;
export default searchSlice.reducer;
