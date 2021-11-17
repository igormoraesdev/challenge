import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {EpisodeList} from '../../../../../src/presentation/pages/Home/components';
import {mockRemoteEpisodeListModel} from '../../../../data/mocks';

describe('EpisodeList', () => {
  it('renders correctly', () => {
    const episodesList = mockRemoteEpisodeListModel();
    const props = {
      selectedSeason: episodesList[0].season,
      onClick: jest.fn(),
      episodesList,
    };
    const {getByTestId} = render(<EpisodeList {...props} />);

    expect(getByTestId('episode'));
  });

  it('should be select episode', () => {
    const episodesList = mockRemoteEpisodeListModel();
    const props = {
      selectedSeason: episodesList[0].season,
      onClick: jest.fn(),
      episodesList,
    };

    const {getByTestId} = render(<EpisodeList {...props} />);

    const button = getByTestId('episode-button');
    fireEvent.press(button);
    expect(props.onClick).toHaveBeenCalled();
  });
});
