import { AnchorHTMLAttributes, FC } from 'react';
import styles from './Link.module.scss';
import classNames from 'classnames';

export enum TextSize {
  SIZE_S = 'size_s',
  SIZE_M = 'size_m'
}

export enum TextWeight {
  WEIGHT_500 = 'weight_500',
  WEIGHT_600 = 'weight_600',
  WEIGHT_700 = 'weight_700'
}

type HTMLLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>;

interface LinkProps extends HTMLLinkProps {
  className?: string;
  children?: React.ReactNode;
  size?: TextSize;
  weight?: TextWeight;
}

const Link: FC<LinkProps> = ({ className, children, size, weight = TextWeight.WEIGHT_500, ...otherProps }) => {
  const mods = {
    [styles[size]]: true,
    [styles[weight]]: true
  };

  return (
    <a className={classNames(styles.link, mods, [className])} {...otherProps}>
      {children}
    </a>
  );
};

export { Link };
