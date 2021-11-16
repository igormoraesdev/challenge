import {createAsyncThunk} from '@reduxjs/toolkit';

import {makeRemoteLoadSeasons} from '../../../../main/factories/usecases';

export const fetchSeasons = createAsyncThunk(
  'tvShow/fetchSeasons',
  async () => {
    const response = await makeRemoteLoadSeasons('6771').load();
    return response;
  },
);
