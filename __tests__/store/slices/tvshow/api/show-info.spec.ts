import {configureStore} from '@reduxjs/toolkit';
import axios from 'axios';

import {fetchShowInfo} from '../../../../../src/store/slices/tvshow/api';
import {mockRemoteInfoDetailsModel} from '../../../../data/mocks';

describe('fetchShowInfo', () => {
  it('should mock fetch call', async () => {
    const mockEpisodesList = mockRemoteInfoDetailsModel();
    const postSpy = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({data: mockEpisodesList});
    const store = configureStore({
      reducer(state = '', action) {
        switch (action.type) {
          case 'tvShow/fetchShowInfo/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchShowInfo());
    expect(postSpy);
  });
});
