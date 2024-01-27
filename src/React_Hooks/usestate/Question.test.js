import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // If you need to simulate user interactions

import MyComponent from './MyComponent'; // Import your React component

// Example test case
test('renders MyComponent with correct text', () => {
  // Render the component
  render(<MyComponent />);

  // Assert that a specific text is present in the component
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});

// Example test case for user interaction
test('clicking button triggers a function', () => {
  // Render the component
  render(<MyComponent />);

  // Simulate a user clicking a button
  const button = screen.getByRole('button');
  userEvent.click(button);

  // Assert that the component behaves as expected after the click
  expect(screen.getByText('Button Clicked!')).toBeInTheDocument();
});