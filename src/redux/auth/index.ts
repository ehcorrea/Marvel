import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { AuthState } from './types';
import { loginByGoogle } from '../../service/auth';

export const login = createAsyncThunk(
  'auth/Login',
  async (_, { rejectWithValue }) => {
    try {
      await GoogleSignin.hasPlayServices();
      return await loginByGoogle();
    } catch (error) {
      return rejectWithValue(String(error));
    }
  }
);

const initialState: AuthState = {
  error: false,
  loading: false,
  hasUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => ({
      ...payload,
      error: false,
      loading: false,
      hasUser: true,
    }));
    builder.addCase(login.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
  },
});

export default authSlice.reducer;
