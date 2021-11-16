import {EpisodesModel} from '../../../domain';
import {CastModel} from '../../../domain/models/cast';

export const tvShowSliceName = 'tvShowSlice' as const;

export const SET_EPISODES = 'setEpisodes';

export const TV_SHOWS_SLICE_ACTIONS = {
  SET_EPISODES: `${tvShowSliceName}/${SET_EPISODES}`,
} as const;

export const TV_SHOWS_SLICE_INITIAL_STATE: TvShowSliceState = {
  episodesList: [],
  castList: [],
};

export type TvShowSliceState = {
  episodesList: EpisodesModel[];
  castList: CastModel[];
};
