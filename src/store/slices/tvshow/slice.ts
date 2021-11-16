import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';

import {
  tvShowSliceName,
  TvShowSliceState,
  TV_SHOWS_SLICE_INITIAL_STATE,
} from '.';
import {EpisodesModel, SeasonsModel, ShowInfoModel} from '../../../domain';
import {CastModel} from '../../../domain/models/cast';
import {fetchCasts, fetchEpisodes, fetchSeasons, fetchShowInfo} from './api';

export const tvShowSlice = createSlice<
  TvShowSliceState,
  SliceCaseReducers<TvShowSliceState>,
  typeof tvShowSliceName
>({
  name: tvShowSliceName,
  initialState: TV_SHOWS_SLICE_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodes.fulfilled, (state, {payload}) => {
      state.episodesList = payload as EpisodesModel[];
    });
    builder.addCase(fetchCasts.fulfilled, (state, {payload}) => {
      state.castList = payload as CastModel[];
    });
    builder.addCase(fetchSeasons.fulfilled, (state, {payload}) => {
      state.seasonsList = payload as SeasonsModel[];
    });
    builder.addCase(fetchShowInfo.fulfilled, (state, {payload}) => {
      state.showInfo = payload as ShowInfoModel;
    });
  },
});
