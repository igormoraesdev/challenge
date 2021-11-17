import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {SeasonList} from '../../../../../src/presentation/pages/Home/components';
import {mockRemoteSeasonListModel} from '../../../../data/mocks';

describe('SeasonList', () => {
  it('renders correctly', () => {
    const seasonsList = mockRemoteSeasonListModel();
    const props = {
      selectedSeason: seasonsList[0].number,
      onClick: jest.fn(),
      seasonsList,
    };
    const {getByTestId} = render(<SeasonList {...props} />);

    expect(getByTestId('season'));
  });

  it('should be select season', () => {
    const seasonsList = mockRemoteSeasonListModel();
    const props = {
      selectedSeason: seasonsList[0].number,
      onClick: jest.fn(),
      seasonsList,
    };

    const {getByTestId} = render(<SeasonList {...props} />);

    const button = getByTestId('season-button');
    fireEvent.press(button);
    expect(props.onClick).toHaveBeenCalled();
  });
});
