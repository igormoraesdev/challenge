import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('renders correctly', async () => {
    renderer.create(<App />);
  });
});
