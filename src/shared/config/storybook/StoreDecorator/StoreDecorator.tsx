import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { addressReducer } from 'features/AddressSearch/model/slice/addressSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  address: addressReducer
};

export const StoreDecorator =
  (initialState: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
    (StoryComponent: Story) => {
      return (
        <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
          <StoryComponent />
        </StoreProvider>
      );
    };
