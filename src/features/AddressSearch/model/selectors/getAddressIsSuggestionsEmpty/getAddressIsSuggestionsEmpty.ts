import { createSelector } from '@reduxjs/toolkit';
import { getAddressState } from '../getAddressState/getAddressState';

export const getAddressIsSuggestionsEmpty = createSelector(
  getAddressState,
  (state) => state?.isSuggestionEmpty || false
);
