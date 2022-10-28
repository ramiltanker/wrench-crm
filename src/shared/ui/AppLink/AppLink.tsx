import { FC } from 'react';
import styles from './AppLink.module.scss';
import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

enum AppLinkColor {
  WHITE = 'white',
  BLACK = 'black'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  to: string;
  children?: React.ReactNode;
  color?: AppLinkColor;
}

const AppLink: FC<AppLinkProps> = ({ className, to, children, color = AppLinkColor.BLACK, ...otherProps }) => {
  return (
    <Link to={to} className={classNames(styles.appLink, {}, [className])} {...otherProps}>
      {children}
    </Link>
  );
};

export { AppLink };
