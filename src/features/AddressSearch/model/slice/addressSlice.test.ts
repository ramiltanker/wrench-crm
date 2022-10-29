import { AddressSchema } from '../types/addressSchema';
import { addressAction, addressReducer } from '../slice/addressSlice';

describe('counterSlice.test', () => {
  test('setAddressQuery reducer', () => {
    const state: AddressSchema = {
      addressQuery: ''
    };

    expect(addressReducer(state, addressAction.setAddressQuery('test'))).toEqual({ addressQuery: 'test' });
  });

  test('setIsEmptySuggestions reducer', () => {
    const state: AddressSchema = {
      isSuggestionEmpty: false
    };

    expect(addressReducer(state, addressAction.setIsEmptySuggestions(true))).toEqual({ isSuggestionEmpty: true });
  });
});
