import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAddressState } from './getAddressState';

describe('getAddressState', () => {
  test('should return addressState', () => {
    const state: DeepPartial<StateSchema> = {
      address: {
        addressQuery: 'test',
        error: undefined,
        isLoading: false,
        isSuggestionEmpty: false,
        suggestions: undefined
      }
    };

    expect(getAddressState(state as StateSchema)).toEqual({
      addressQuery: 'test',
      error: undefined,
      isLoading: false,
      isSuggestionEmpty: false,
      suggestions: undefined
    });
  });
});
