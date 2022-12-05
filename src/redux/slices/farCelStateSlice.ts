import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  far: true,
};

const farCelStateSlice = createSlice({
  name: 'farCel',
  initialState: initialState,
  reducers: {
    setFarCel: (state, action: PayloadAction<boolean>) => {
      state.far = action.payload;
    },
  },
});

export const { setFarCel } = farCelStateSlice.actions;

export default farCelStateSlice.reducer;

