import {createAsyncThunk} from '@reduxjs/toolkit';

import {makeRemoteLoadEpisodes} from '../../../../main/factories/usecases';

export const fetchEpisodes = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await makeRemoteLoadEpisodes('6771').load();
    return response;
  },
);
