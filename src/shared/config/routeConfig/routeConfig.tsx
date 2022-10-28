import { AddressPageAsync } from 'pages/Address/index';
import { MainAsyncPage } from 'pages/Main/index';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ADDRESS = 'address',
  TABLES = 'tables',
  CALENDAR = 'calendar',
  MAPS = 'maps',
  WIDGETS = 'widgets',
  PROFILE_EDIT = 'profile_edit',
  FINANCIAL_MANAGEMENT = 'financial_management',
  NOT_FOUND = 'not-found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ADDRESS]: '/address',
  [AppRoutes.TABLES]: '#',
  [AppRoutes.CALENDAR]: '#',
  [AppRoutes.MAPS]: '#',
  [AppRoutes.WIDGETS]: '#',
  [AppRoutes.PROFILE_EDIT]: '#',
  [AppRoutes.FINANCIAL_MANAGEMENT]: '#',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainAsyncPage />
  },
  [AppRoutes.ADDRESS]: {
    path: RoutePath.address,
    element: <AddressPageAsync />
  },
  [AppRoutes.TABLES]: {
    path: RoutePath.tables,
    element: <></>
  },
  [AppRoutes.CALENDAR]: {
    path: RoutePath.calendar,
    element: <></>
  },
  [AppRoutes.MAPS]: {
    path: RoutePath.maps,
    element: <></>
  },
  [AppRoutes.WIDGETS]: {
    path: RoutePath.widgets,
    element: <></>
  },
  [AppRoutes.PROFILE_EDIT]: {
    path: RoutePath.profile_edit,
    element: <></>
  },
  [AppRoutes.FINANCIAL_MANAGEMENT]: {
    path: RoutePath.financial_management,
    element: <></>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <></>
  }
};
