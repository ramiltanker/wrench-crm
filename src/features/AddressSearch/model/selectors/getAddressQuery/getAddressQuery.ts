import { createSelector } from '@reduxjs/toolkit';
import { getAddressState } from '../getAddressState/getAddressState';

export const getAddressQuery = createSelector(getAddressState, (state) => state?.addressQuery || '');
