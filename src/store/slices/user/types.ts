import {UserModel} from '../../../domain';

export const userSliceName = 'userSlice' as const;

export const SET_USER = 'setUser';

export const USER_SLICE_ACTIONS = {
  SET_USER: `${userSliceName}/${SET_USER}`,
} as const;

export const USER_SLICE_INITIAL_STATE: UserSliceState = {
  user: null,
};

export type UserSliceState = {
  user: UserModel | null;
};
