import {configureStore} from '@reduxjs/toolkit';
import axios from 'axios';

import {fetchCasts} from '../../../../../src/store/slices/tvshow/api';
import {mockRemoteCastListModel} from '../../../../data/mocks';

describe('fetchCasts', () => {
  it('should mock fetch call', async () => {
    const mockCastsList = mockRemoteCastListModel();
    const postSpy = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({data: mockCastsList});
    const store = configureStore({
      reducer(state = '', action) {
        switch (action.type) {
          case 'tvShow/fetchCasts/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchCasts());
    expect(postSpy);
  });
});
