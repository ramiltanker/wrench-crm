import { FC, memo } from 'react';
import styles from './Logo.module.scss';
import classNames from 'classnames';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { Text, TextWeight } from 'shared/ui/Text/Text';
import { Icon, IconSize } from '../Icon/Icon';

interface LogoProps {
  className?: string;
}

const Logo = memo(({ className }: LogoProps) => {
  return (
    <div className={classNames(styles.logo, {}, [className])}>
      <Icon size={IconSize.SIZE_M}>
        <LogoIcon />
      </Icon>
      <Text className={styles.text} weight={TextWeight.WEIGHT_700}>
        Wrench CRM
      </Text>
    </div>
  );
});

export { Logo };
