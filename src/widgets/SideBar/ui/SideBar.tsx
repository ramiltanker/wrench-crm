import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames';
import { routes } from 'shared/constants/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text, TextColor, TextWeight } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Arrow from 'shared/assets/icons/button-arrow.svg';
import Exit from 'shared/assets/icons/exit.svg';

interface SideBarProps {
  className?: string;
}

const SideBar = memo(({ className }: SideBarProps) => {
  const [isSubRoutesOpen, setIsSubRoutesOpen] = useState(false);

  const handleToggleSubRoutes = useCallback(() => {
    setIsSubRoutesOpen((state) => !state);
  }, []);

  return (
    <div data-testid="sidebar" className={classNames(styles.sideBar, {}, [className])}>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {routes.map(({ id, logo, name, subRoutes, to }) => {
            if (subRoutes) {
              return (
                <li className={styles.li} key={id}>
                  <Button
                    data-testid="button-subrouting"
                    onClick={handleToggleSubRoutes}
                    className={styles.button}
                    theme={ButtonTheme.BACKGROUND_WHITE}
                    type="button"
                  >
                    <Icon>{logo}</Icon>
                    <Text color={TextColor.BLACK} weight={TextWeight.WEIGHT_600} className={styles.text}>
                      {name}
                    </Text>
                    <Arrow className={classNames(styles.arrow, isSubRoutesOpen ? styles.rotate : '')} />
                  </Button>
                  <div
                    data-testid="subrouting"
                    className={classNames(styles.subRoutes, {
                      [styles.subRoutesOpen]: isSubRoutesOpen
                    })}
                  >
                    {subRoutes.map(({ id, logo, name, to }) => {
                      return (
                        <AppLink to={to} key={id}>
                          <Icon>{logo}</Icon>
                          <Text color={TextColor.BLACK} weight={TextWeight.WEIGHT_600} className={styles.text}>
                            {name}
                          </Text>
                        </AppLink>
                      );
                    })}
                  </div>
                </li>
              );
            } else {
              return (
                <li className={styles.li} key={id}>
                  <AppLink to={to}>
                    <Icon>{logo}</Icon>
                    <Text color={TextColor.BLACK} weight={TextWeight.WEIGHT_600} className={styles.text}>
                      {name}
                    </Text>
                  </AppLink>
                </li>
              );
            }
          })}
          <li className={styles.li}>
            <Button className={styles.exitButton}>
              <Icon>
                <Exit />
              </Icon>
              <Text color={TextColor.BLACK} weight={TextWeight.WEIGHT_600} className={styles.text}>
                Выход
              </Text>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export { SideBar };
