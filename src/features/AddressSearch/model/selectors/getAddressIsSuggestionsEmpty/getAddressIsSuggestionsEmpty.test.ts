import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAddressIsSuggestionsEmpty } from './getAddressIsSuggestionsEmpty';

describe('getAddressIsSuggestionsEmpty', () => {
  test('should return isSuggestionsEmpty', () => {
    const state: DeepPartial<StateSchema> = {
      address: {
        isSuggestionEmpty: false
      }
    };

    expect(getAddressIsSuggestionsEmpty(state as StateSchema)).toBe(false);
  });
});
