import { render, screen } from '@testing-library/react';
import { Input, InputThemes } from './Input';

describe('Input', () => {
  test('Test render', () => {
    render(<Input value="test"></Input>);
    expect(screen.getByTestId('shared-input')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<Input theme={InputThemes.CLEAR}></Input>);
    expect(screen.getByTestId('shared-input')).toHaveClass('clear');
    screen.debug();
  });
});
