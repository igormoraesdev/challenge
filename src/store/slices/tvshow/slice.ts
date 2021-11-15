import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';

import {
  SET_EPISODES,
  tvShowSliceName,
  TvShowSliceState,
  TV_SHOWS_SLICE_INITIAL_STATE,
} from '.';
import {EpisodesModel} from '../../../domain';
import {setEpisodesReducer} from './actions';
import {fetchEpisodes} from './api';

export const tvShowSlice = createSlice<
  TvShowSliceState,
  SliceCaseReducers<TvShowSliceState>,
  typeof tvShowSliceName
>({
  name: tvShowSliceName,
  initialState: TV_SHOWS_SLICE_INITIAL_STATE,
  reducers: {
    [SET_EPISODES]: setEpisodesReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodes.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchEpisodes.fulfilled, (state, {payload}) => {
      state.episodesList = payload as EpisodesModel[];
    });
  },
});
