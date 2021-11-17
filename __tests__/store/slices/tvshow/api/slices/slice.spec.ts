import {
  tvShowSlice,
  TV_SHOWS_SLICE_INITIAL_STATE,
} from '../../../../../../src/store/slices';
import {
  fetchCasts,
  fetchEpisodes,
  fetchSeasons,
  fetchShowInfo,
} from '../../../../../../src/store/slices/tvshow/api';
import {
  mockRemoteCastListModel,
  mockRemoteEpisodeListModel,
  mockRemoteInfoDetailsModel,
  mockRemoteSeasonListModel,
} from '../../../../../data/mocks';

describe('Slice', () => {
  it('should test extra reducers fetchCasts', async () => {
    const castList = mockRemoteCastListModel();
    const action = fetchCasts.fulfilled(castList, '');

    expect(
      tvShowSlice.reducer(TV_SHOWS_SLICE_INITIAL_STATE, action),
    ).toStrictEqual({
      castList,
      episodesList: [],
      seasonsList: [],
      showInfo: null,
    });
  });
  it('should test extra reducers fetchEpisodes', async () => {
    const episodesList = mockRemoteEpisodeListModel();

    const action = fetchEpisodes.fulfilled(episodesList, '');
    expect(
      tvShowSlice.reducer(TV_SHOWS_SLICE_INITIAL_STATE, action),
    ).toStrictEqual({
      castList: [],
      episodesList,
      seasonsList: [],
      showInfo: null,
    });
  });
  it('should test extra reducers fetchSeasons', async () => {
    const seasonsList = mockRemoteSeasonListModel();

    const action = fetchSeasons.fulfilled(seasonsList, '');
    expect(
      tvShowSlice.reducer(TV_SHOWS_SLICE_INITIAL_STATE, action),
    ).toStrictEqual({
      castList: [],
      episodesList: [],
      seasonsList,
      showInfo: null,
    });
  });
  it('should test extra reducers fetchShowInfo', async () => {
    const showInfo = mockRemoteInfoDetailsModel();

    const action = fetchShowInfo.fulfilled(showInfo, '');
    expect(
      tvShowSlice.reducer(TV_SHOWS_SLICE_INITIAL_STATE, action),
    ).toStrictEqual({
      castList: [],
      episodesList: [],
      seasonsList: [],
      showInfo,
    });
  });
});
