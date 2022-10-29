import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAddressSuggestions } from './getAddressSuggestions';

describe('getAddressSuggestions', () => {
  test('should return suggestions', () => {
    const state: DeepPartial<StateSchema> = {
      address: {
        suggestions: { suggestions: [] }
      }
    };

    expect(getAddressSuggestions(state as StateSchema)).toEqual([]);
  });
});
