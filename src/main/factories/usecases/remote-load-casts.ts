import {RemoteLoadCasts} from '../../../data/usecases';
import {LoadCastsList} from '../../../domain';
import {makeApiUrl, makeAxiosHttpClient} from '../http';

export const makeRemoteLoadCasts = (id: string): LoadCastsList =>
  new RemoteLoadCasts(makeApiUrl(`/${id}/cast`), makeAxiosHttpClient());
