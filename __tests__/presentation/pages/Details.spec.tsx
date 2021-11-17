import 'react-native';
import {render} from '@testing-library/react-native';
import React from 'react';

import Details from '../../../src/presentation/pages/Details';
import {mockRemoteInfoDetailsModel} from '../../data/mocks';

describe('Details', () => {
  const navigation: any = {
    navigate: jest.fn(),
  };
  const route: any = {
    params: {
      item: mockRemoteInfoDetailsModel(),
    },
  };
  it('renders correctly', async () => {
    render(<Details navigation={navigation} route={route} />);
  });
});
