import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAddressIsLoading } from './getAddressIsLoading';

describe('getAddressIsLoading', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      address: {
        isLoading: false
      }
    };

    expect(getAddressIsLoading(state as StateSchema)).toBe(false);
  });
});
