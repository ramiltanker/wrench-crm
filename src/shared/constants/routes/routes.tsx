import Main from 'shared/assets/icons/main.svg';
import Address from 'shared/assets/icons/address.svg';
import Tables from 'shared/assets/icons/tables.svg';
import Calendar from 'shared/assets/icons/calendar.svg';
import Maps from 'shared/assets/icons/maps.svg';
import Widgets from 'shared/assets/icons/widgets.svg';
import Settings from 'shared/assets/icons/settings.svg';
import ProfileEdit from 'shared/assets/icons/profile-edit.svg';
import FinancialManagement from 'shared/assets/icons/financial-management.svg';

export interface Route {
  id: number;
  name: string;
  logo: React.ReactNode;
  to?: string;
  subRoutes?: Route[];
}

export const routes: Route[] = [
  {
    id: 0,
    name: 'Главная',
    to: '/',
    logo: <Main />
  },
  {
    id: 1,
    name: 'Поиск адресов',
    to: '/address',
    logo: <Address />
  },
  {
    id: 2,
    name: 'Таблицы',
    to: '#',
    logo: <Tables />
  },
  {
    id: 3,
    name: 'Календарь',
    to: '#',
    logo: <Calendar />
  },
  {
    id: 4,
    name: 'Карты',
    to: '#',
    logo: <Maps />
  },
  {
    id: 5,
    name: 'Виджеты',
    to: '#',
    logo: <Widgets />
  },
  {
    id: 6,
    name: 'Настройки',
    logo: <Settings />,
    subRoutes: [
      { id: 0, name: 'Настройки профиля', to: '#', logo: <ProfileEdit /> },
      { id: 1, name: 'Управление финансами', to: '#', logo: <FinancialManagement /> }
    ]
  }
];
