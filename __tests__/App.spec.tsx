import 'react-native';
import {render} from '@testing-library/react-native';
import React from 'react';

import App from '../src/App';

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('renders correctly', async () => {
    render(<App />);
  });
});
