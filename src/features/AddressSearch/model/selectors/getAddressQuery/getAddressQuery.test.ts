import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getAddressQuery } from './getAddressQuery';

describe('getAddressQuery', () => {
  test('should return addressQuery', () => {
    const state: DeepPartial<StateSchema> = {
      address: {
        addressQuery: 'test query'
      }
    };

    expect(getAddressQuery(state as StateSchema)).toBe('test query');
  });
});
