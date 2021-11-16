import {createAsyncThunk} from '@reduxjs/toolkit';

import {makeRemoteLoadCasts} from '../../../../main/factories/usecases';

export const fetchCasts = createAsyncThunk('tvShow/fetchCasts', async () => {
  const response = await makeRemoteLoadCasts('6771').load();
  return response;
});
