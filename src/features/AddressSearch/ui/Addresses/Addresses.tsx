import { FC } from 'react';
import styles from './Addresses.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getAddressSuggestions } from 'features/AddressSearch/model/selectors/getAddressSuggestions/getAddressSuggestions';
import { getAddressIsLoading } from 'features/AddressSearch/model/selectors/getAddressIsLoading/getAddressIsLoading';
import { Text, TextColor, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { getAddressIsSuggestionsEmpty } from 'features/AddressSearch/model/selectors/getAddressIsSuggestionsEmpty/getAddressIsSuggestionsEmpty';

interface AddressesProps {
  className?: string;
}

const Addresses: FC<AddressesProps> = ({ className }) => {
  const suggestions = useSelector(getAddressSuggestions);
  const isLoading = useSelector(getAddressIsLoading);
  const isSuggestionsEmpty = useSelector(getAddressIsSuggestionsEmpty);

  return (
    <>
      {isLoading
        ? (
          <Text color={TextColor.BLACK} size={TextSize.SIZE_M} weight={TextWeight.WEIGHT_700} className={styles.loader}>
            Адреса загружаются...
          </Text>
          )
        : isSuggestionsEmpty
          ? (
            <Text color={TextColor.BLACK} size={TextSize.SIZE_M} weight={TextWeight.WEIGHT_700} className={styles.loader}>
              Ничего не найдено
            </Text>
            )
          : suggestions.length > 0
            ? (
              <div className={classNames(styles.addresses, {}, [className])}>
                <Text size={TextSize.SIZE_M} weight={TextWeight.WEIGHT_700} color={TextColor.BLACK} className={styles.text}>
                  Адреса
                </Text>
                <ul className={styles.list}>
                  {suggestions.map((item, index) => {
                    return (
                      <li className={styles.li} key={item.value}>
                        <Text color={TextColor.BLACK}>{item.value}</Text>
                      </li>
                    );
                  })}
                </ul>
              </div>
              )
            : (
              <></>
              )}
    </>
  );
};

export { Addresses };
