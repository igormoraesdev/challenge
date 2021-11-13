import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';

import {setUserReducer} from './actions';
import {
  SET_USER,
  userSliceName,
  UserSliceState,
  USER_SLICE_INITIAL_STATE,
} from './types';

export const userSlice = createSlice<
  UserSliceState,
  SliceCaseReducers<UserSliceState>,
  typeof userSliceName
>({
  name: userSliceName,
  initialState: USER_SLICE_INITIAL_STATE,
  reducers: {
    [SET_USER]: setUserReducer,
  },
});
