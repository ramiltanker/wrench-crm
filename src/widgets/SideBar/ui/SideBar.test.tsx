import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { SideBar } from './Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle setting button', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const button = screen.getByTestId('button-subrouting');
    fireEvent.click(button);
    expect(screen.getByTestId('subrouting')).toHaveClass('subRoutesOpen');
  });
});
