import { AddressSchema } from '../types/addressSchema';
import { addressAction, addressReducer } from '../slice/addressSlice';
import { DeepPartial } from '@reduxjs/toolkit';

describe('counterSlice.test', () => {
  test('setAddressQuery reducer', () => {
    const state: DeepPartial<AddressSchema> = {
      addressQuery: ''
    };

    expect(addressReducer(state as AddressSchema, addressAction.setAddressQuery('test'))).toEqual({
      addressQuery: 'test'
    });
  });

  test('setIsEmptySuggestions reducer', () => {
    const state: DeepPartial<AddressSchema> = {
      isSuggestionEmpty: false
    };

    expect(addressReducer(state as AddressSchema, addressAction.setIsEmptySuggestions(true))).toEqual({
      isSuggestionEmpty: true
    });
  });
});
