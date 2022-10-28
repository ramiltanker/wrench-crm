import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSuggestions } from '../services/getSuggestions/getSuggestions';
import { AddressSchema } from '../types/addressSchema';

const initialState: AddressSchema = {
  isLoading: false,
  suggestions: undefined,
  isSuggestionEmpty: false,
  addressQuery: '',
  error: undefined
};

export const addressSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAddressQuery: (state, action: PayloadAction<string>) => {
      state.addressQuery = action.payload;
    },
    setIsEmptySuggestions: (state, action: PayloadAction<boolean>) => {
      state.isSuggestionEmpty = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSuggestions.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getSuggestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suggestions = action.payload;
      })
      .addCase(getSuggestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: addressAction } = addressSlice;
export const { reducer: addressReducer } = addressSlice;
