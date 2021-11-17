import {configureStore} from '@reduxjs/toolkit';
import axios from 'axios';

import {fetchSeasons} from '../../../../../src/store/slices/tvshow/api';
import {mockRemoteSeasonListModel} from '../../../../data/mocks';

describe('fetchSeasons', () => {
  it('should mock fetch call', async () => {
    const mockEpisodesList = mockRemoteSeasonListModel();
    const postSpy = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({data: mockEpisodesList});
    const store = configureStore({
      reducer(state = '', action) {
        switch (action.type) {
          case 'tvShow/fetchSeasons/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchSeasons());
    expect(postSpy);
  });
});
