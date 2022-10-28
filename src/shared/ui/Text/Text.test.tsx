import { render, screen } from '@testing-library/react';
import { Text, TextColor, TextWeight, TextSize } from './Text';

describe('Text', () => {
  test('Test render', () => {
    render(<Text>TestText</Text>);
    expect(screen.getByText('TestText')).toBeInTheDocument();
  });

  test('Test Text size', () => {
    render(<Text size={TextSize.SIZE_M}>Test Text</Text>);
    expect(screen.getByText('Test Text')).toHaveClass('size_m');
  });

  test('Test Text weight 500', () => {
    render(<Text weight={TextWeight.WEIGHT_500}>Test Text</Text>);
    expect(screen.getByText('Test Text')).toHaveClass('weight_500');
    screen.debug();
  });

  test('Test Text color black', () => {
    render(<Text color={TextColor.BLACK}>TestText</Text>);
    expect(screen.getByText('TestText')).toHaveClass('black');
    screen.debug();
  });
});
