import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { addressAction } from '../../slice/addressSlice';
import { getSuggestions } from './getSuggestions';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('getSuggestions', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success suggestions', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: { suggestions: ['one', 'two', 'three'] } }));
    const action = getSuggestions('test');
    const result = await action(dispatch, getState, undefined);

    if (result.meta.requestStatus === 'fulfilled') {
      expect(dispatch).toHaveBeenCalledWith(addressAction.setIsEmptySuggestions(false));
    } else {
      expect(dispatch).toHaveBeenCalledWith(addressAction.setIsEmptySuggestions(true));
    }
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error suggestions', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ error: 'error' }));
    const action = getSuggestions('test');
    const result = await action(dispatch, getState, undefined);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
