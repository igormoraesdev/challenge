import {EpisodesModel, SeasonsModel, ShowInfoModel} from '../../../domain';
import {CastModel} from '../../../domain/models/cast';

export const tvShowSliceName = 'tvShowSlice' as const;

export const TV_SHOWS_SLICE_ACTIONS = {} as const;

export const TV_SHOWS_SLICE_INITIAL_STATE: TvShowSliceState = {
  episodesList: [],
  castList: [],
  seasonsList: [],
  showInfo: null,
};

export type TvShowSliceState = {
  episodesList: EpisodesModel[];
  castList: CastModel[];
  seasonsList: SeasonsModel[];
  showInfo: ShowInfoModel | null;
};
