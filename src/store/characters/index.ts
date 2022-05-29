import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CharactersFilter } from './types';

const initialState: CharactersFilter = { limit: 20, offset: 0 };

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<CharactersFilter>) => ({
      ...state,
      ...action.payload,
    }),
    clearFilter: (state) => ({
      ...initialState,
      offset: state.offset,
    }),
  },
});

export const { filter } = charactersSlice.actions;

export default charactersSlice.reducer;
