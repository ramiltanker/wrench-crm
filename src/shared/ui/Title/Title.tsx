import { FC } from 'react';
import styles from './Title.module.scss';
import classNames from 'classnames';

export enum TitleColor {
  WHITE = 'white',
  BLACK = 'black'
}

export enum TitleSize {
  SIZE_S = 'size_s',
  SIZE_M = 'size_m'
}

export enum TitleWeight {
  WEIGHT_500 = 'weight_500',
  WEIGHT_600 = 'weight_600',
  WEIGHT_700 = 'weight_700'
}

interface TitleProps {
  className?: string;
  children?: React.ReactNode;
  size?: TitleSize;
  color?: TitleColor;
  weight?: TitleWeight;
}

const Title: FC<TitleProps> = ({
  className,
  children,
  size = TitleSize.SIZE_S,
  color = TitleColor.WHITE,
  weight = TitleWeight.WEIGHT_500
}) => {
  const mods = {
    [styles[size]]: true,
    [styles[color]]: true,
    [styles[weight]]: true
  };

  return <h2 className={classNames(styles.title, mods, [className])}>{children}</h2>;
};

export { Title };
