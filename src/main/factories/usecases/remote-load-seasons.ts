import {RemoteLoadSeasons} from '../../../data/usecases';
import {LoadSeasonsList} from '../../../domain';
import {makeApiUrl, makeAxiosHttpClient} from '../http';

export const makeRemoteLoadSeasons = (id: string): LoadSeasonsList =>
  new RemoteLoadSeasons(makeApiUrl(`/${id}/seasons`), makeAxiosHttpClient());
