import { lazy } from 'react';

export const AddressComponentAsync = lazy(async () => await import('./AddressComponent'));
