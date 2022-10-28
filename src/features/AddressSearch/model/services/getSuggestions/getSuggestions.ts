import { createAsyncThunk } from '@reduxjs/toolkit';
import { Suggestion } from '../../types/addressSchema';
import axios from 'axios';
import { addressAction } from '../../slice/addressSlice';

interface GetAddressProps {
  query: string;
}

const TOKEN = '7acdf90e9715f4eef4fc6786207d9bbb947b7022';

export const getSuggestions = createAsyncThunk<{ suggestions: Suggestion[] }, string, { rejectValue: string }>(
  'get/getSuggestions',
  async (query, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<{ suggestions: Suggestion[] }>(
        'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
        { query, count: 20 },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Token ' + TOKEN
          }
        }
      );

      if (!response.data) {
        throw new Error();
      }

      if (response.data.suggestions.length === 0) {
        dispatch(addressAction.setIsEmptySuggestions(true));
      } else {
        dispatch(addressAction.setIsEmptySuggestions(false));
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
