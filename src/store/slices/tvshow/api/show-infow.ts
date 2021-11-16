import {createAsyncThunk} from '@reduxjs/toolkit';

import {makeRemoteLoadInfo} from '../../../../main/factories/usecases';

export const fetchShowInfo = createAsyncThunk(
  'tvShow/fetchShowInfo',
  async () => {
    const response = await makeRemoteLoadInfo('6771').load();
    return response;
  },
);
