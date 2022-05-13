import { render, screen } from '@testing-library/react';
import NavigationBar from '../../components/share/NavigationBar';

test('Renders Reviews in top navigation bar', () => {
  render(<NavigationBar />);
  expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
});
