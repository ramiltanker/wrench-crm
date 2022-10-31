import { FC, memo } from 'react';
import styles from './Address.module.scss';
import classNames from 'classnames';
import { AddressComponentAsync } from 'features/AddressSearch';
import { Title, TitleColor, TitleSize, TitleWeight } from 'shared/ui/Title/Title';
import { Text, TextColor } from 'shared/ui/Text/Text';

interface AddressProps {
  className?: string;
}

const Address = memo(({ className }: AddressProps) => {
  return (
    <div className={classNames(styles.address, {}, [className])}>
      <Title color={TitleColor.BLACK} weight={TitleWeight.WEIGHT_700} size={TitleSize.SIZE_M} className={styles.title}>
        Поиск адресов
      </Title>
      <Text color={TextColor.GRAY} className={styles.text}>
        Введите интересующий вас адрес
      </Text>
      <AddressComponentAsync />
    </div>
  );
});

export default Address;
