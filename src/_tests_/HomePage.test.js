import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';
import store from '../redux/configureStore';

describe('Home component', () => {
  test('should rendered correctly', () => {
    const screen = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen).toMatchSnapshot();
  });
});
