import {EpisodesModel} from '../../../domain';

export const tvShowSliceName = 'tvShowSlice' as const;

export const SET_EPISODES = 'setEpisodes';

export const TV_SHOWS_SLICE_ACTIONS = {
  SET_EPISODES: `${tvShowSliceName}/${SET_EPISODES}`,
} as const;

export const TV_SHOWS_SLICE_INITIAL_STATE: TvShowSliceState = {
  episodesList: [],
  error: null,
  status: 'idle',
};

export type TvShowSliceState = {
  episodesList: EpisodesModel[];
  error: null | string;
  status: 'loading' | 'idle';
};