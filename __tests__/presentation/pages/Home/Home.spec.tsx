import 'react-native';
import {render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';

import Home from '../../../../src/presentation/pages/Home';
import {store} from '../../../../src/store';

describe('Home', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  const navigation: any = {
    navigate: jest.fn(),
  };
  const route: any = {};

  it('renders correctly', async () => {
    render(
      <Provider store={store}>
        <Home navigation={navigation} route={route} />
      </Provider>,
    );
  });
});
