import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  active: 0,
};

const activeStateSlice = createSlice({
  name: 'active',
  initialState: initialState,
  reducers: {
    setActive: (state, action: PayloadAction<number>) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = activeStateSlice.actions;

export default activeStateSlice.reducer;

