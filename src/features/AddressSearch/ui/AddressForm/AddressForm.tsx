import { FC, useCallback, useEffect, useMemo, useState, memo } from 'react';
import styles from './AddressForm.module.scss';
import classNames from 'classnames';
import { Input, InputThemes } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextColor, TextSize, TextWeight } from 'shared/ui/Text/Text';
import Search from 'shared/assets/icons/search.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { addressAction } from 'features/AddressSearch/model/slice/addressSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAddressQuery } from 'features/AddressSearch/model/selectors/getAddressQuery/getAddressQuery';
import { getSuggestions } from 'features/AddressSearch/model/services/getSuggestions/getSuggestions';

export interface FormValidationProperty {
  valid: boolean;
  message: string;
}

export interface FormValidation {
  minLength: FormValidationProperty;
}

interface AddressFormProps {
  className?: string;
}

const AddressForm = memo(({ className }: AddressFormProps) => {
  const addressQuery = useSelector(getAddressQuery);
  const dispatch = useDispatch();
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = useCallback(
    (value: string) => {
      dispatch(addressAction.setAddressQuery(value));
    },
    [dispatch]
  );

  const handleSearchAddress = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(getSuggestions(addressQuery));
    },
    [addressQuery, dispatch]
  );

  const formValidation = useMemo<FormValidation>(() => {
    const validity: FormValidation = {
      minLength: {
        valid: addressQuery.length >= 3,
        message: 'Длина запроса должна быть не менее 3-х символов'
      }
    };

    return validity;
  }, [addressQuery]);

  useEffect(() => {
    setFormIsValid(Object.values(formValidation).every((value: FormValidationProperty) => value.valid));
  }, [formValidation]);

  return (
    <form className={classNames(styles.addressForm, {}, [className])} onSubmit={handleSearchAddress}>
      <div className={styles.box}>
        <Input
          theme={InputThemes.OUTLINE_PURPLE}
          placeholder="Введите интересующий вас адрес"
          className={styles.input}
          onChange={handleChange}
          value={addressQuery}
        />
        <Button theme={ButtonTheme.BACKGROUND_PURPLE} className={styles.button} disabled={!formIsValid} type="submit">
          <Icon>
            <Search />
          </Icon>
          <Text size={TextSize.SIZE_M} weight={TextWeight.WEIGHT_700}>
            Поиск
          </Text>
        </Button>
      </div>
      {addressQuery.length > 0 && !formIsValid && (
        <Text size={TextSize.SIZE_S} weight={TextWeight.WEIGHT_700} color={TextColor.RED} className={styles.error}>
          {
            Object.values(formValidation)
              .filter((value: FormValidationProperty) => !value.valid)
              .map((value: FormValidationProperty) => value.message)[0]
          }
        </Text>
      )}
    </form>
  );
});

export { AddressForm };
