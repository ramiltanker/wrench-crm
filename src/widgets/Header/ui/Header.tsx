import { FC } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { Logo } from 'shared/ui/Logo/Logo';
import User from 'shared/assets/icons/user.svg';
import { Icon, IconSize } from 'shared/ui/Icon/Icon';
import { Text, TextColor, TextWeight } from 'shared/ui/Text/Text';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={classNames(styles.header, {}, [])}>
      <div className={classNames(styles.headerWrapper)}>
        <Logo />
        <div className={styles.user}>
          <Icon size={IconSize.SIZE_M}>
            <User />
          </Icon>
          <Text className={styles.userText} weight={TextWeight.WEIGHT_700} color={TextColor.WHITE}>
            Имя Фамилия
          </Text>
        </div>
      </div>
    </header>
  );
};

export { Header };
