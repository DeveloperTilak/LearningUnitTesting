import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
 
import Home from '../components/Home';

test('first test', () => {
  act(() => {
    render(<Home />);
  });
  const element = screen.getByText(/Writing first testing logic./i);
  expect(element).toBeInTheDocument();
});
