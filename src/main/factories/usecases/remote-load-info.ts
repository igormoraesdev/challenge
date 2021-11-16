import {RemoteLoadInfo} from '../../../data/usecases';
import {LoadInfo} from '../../../domain';
import {makeApiUrl, makeAxiosHttpClient} from '../http';

export const makeRemoteLoadInfo = (id: string): LoadInfo =>
  new RemoteLoadInfo(makeApiUrl(`/${id}`), makeAxiosHttpClient());
