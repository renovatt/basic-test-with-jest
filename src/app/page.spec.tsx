import Home from './page';
import { render } from '@testing-library/react';

describe('Home Component Tests', () => {
  it('should render Home component', () => {
    render(<Home />);
  });
  
  it('should render Header component', () => {
    const { getByRole } = render(<Home />);
    const headerElement = getByRole('banner');

    expect(headerElement).toBeInTheDocument();
  });
});
