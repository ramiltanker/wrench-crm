import { createSelector } from '@reduxjs/toolkit';
import { getAddressState } from '../getAddressState/getAddressState';

export const getAddressSuggestions = createSelector(getAddressState, (state) => state?.suggestions?.suggestions || []);
