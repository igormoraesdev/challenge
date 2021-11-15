import {createAction} from '@reduxjs/toolkit';

import {TvShowSliceState, TV_SHOWS_SLICE_ACTIONS} from '..';
import {EpisodesModel} from '../../../../domain/models';
import {ActionMap, ReducerMap} from '../../../types';

export const setEpisodes: ActionMap<EpisodesModel[]> = createAction(
  TV_SHOWS_SLICE_ACTIONS.SET_EPISODES,
);

export const setEpisodesReducer: ReducerMap<TvShowSliceState, EpisodesModel[]> =
  (state, action) => {
    state.episodesList = action.payload;
    return state;
  };
