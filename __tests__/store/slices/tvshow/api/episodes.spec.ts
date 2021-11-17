import {configureStore} from '@reduxjs/toolkit';
import axios from 'axios';

import {fetchEpisodes} from '../../../../../src/store/slices/tvshow/api';
import {mockRemoteEpisodeListModel} from '../../../../data/mocks';

describe('fetchEpisodes', () => {
  it('should mock fetch call', async () => {
    const mockEpisodesList = mockRemoteEpisodeListModel();
    const postSpy = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({data: mockEpisodesList});
    const store = configureStore({
      reducer(state = '', action) {
        switch (action.type) {
          case 'tvShow/fetchEpisodes/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchEpisodes());
    expect(postSpy);
  });
});
