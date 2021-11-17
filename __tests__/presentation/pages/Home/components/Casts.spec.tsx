import 'react-native';
import {render} from '@testing-library/react-native';
import React from 'react';

import {Casts} from '../../../../../src/presentation/pages/Home/components';
import {mockRemoteCastListModel} from '../../../../data/mocks';

describe('Casts', () => {
  it('renders correctly', async () => {
    const castList = mockRemoteCastListModel();
    const {getByTestId} = render(<Casts castList={castList} />);
    expect(getByTestId('flatlist'));
  });
});
