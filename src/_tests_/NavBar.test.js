import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

describe('NavBar component', () => {
  test('should rendered correctly', () => {
    render(<NavBar />);
    expect(screen).toMatchSnapshot();
  });
});
