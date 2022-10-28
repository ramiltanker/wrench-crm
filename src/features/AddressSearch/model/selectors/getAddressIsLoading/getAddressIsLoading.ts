import { createSelector } from '@reduxjs/toolkit';
import { getAddressState } from '../getAddressState/getAddressState';

export const getAddressIsLoading = createSelector(getAddressState, (state) => state?.isLoading || false);
