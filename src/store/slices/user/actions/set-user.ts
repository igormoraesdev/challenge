import {createAction} from '@reduxjs/toolkit';

import {UserModel} from '../../../../domain/models';
import {ActionMap, ReducerMap} from '../../../types';
import {UserSliceState, USER_SLICE_ACTIONS} from '../types';

export const setUser: ActionMap<UserModel> = createAction(
  USER_SLICE_ACTIONS.SET_USER,
);

export const setUserReducer: ReducerMap<UserSliceState, UserModel> = (
  state,
  action,
) => {
  state.user = action.payload;
  return state;
};
