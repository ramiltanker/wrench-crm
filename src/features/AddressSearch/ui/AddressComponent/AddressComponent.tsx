import { FC } from 'react';
import { Addresses } from '../Addresses/Addresses';
import { AddressForm } from '../AddressForm/AddressForm';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addressReducer } from 'features/AddressSearch/model/slice/addressSlice';

interface AddressComponentProps {}

const initialReducers: ReducersList = {
  address: addressReducer
};

const AddressComponent: FC<AddressComponentProps> = () => {
  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <AddressForm />
      <Addresses />
    </DynamicModuleLoader>
  );
};

export default AddressComponent;
