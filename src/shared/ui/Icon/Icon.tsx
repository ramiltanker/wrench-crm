import { FC } from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames';

export enum IconSize {
  SIZE_S = 'size_s',
  SIZE_M = 'size_m'
}

interface IconProps {
  className?: string;
  children?: React.ReactNode;
  size?: IconSize;
}

const Icon: FC<IconProps> = ({ className, children, size = IconSize.SIZE_S }) => {
  const mods = {
    [styles[size]]: true
  };

  return <div className={classNames(styles.icon, mods, [className])}>{children}</div>;
};

export { Icon };
