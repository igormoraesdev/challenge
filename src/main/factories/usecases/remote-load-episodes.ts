import {RemoteLoadEpisodeList} from '../../../data/usecases';
import {LoadEpisodesList} from '../../../domain';
import {makeApiUrl, makeAxiosHttpClient} from '../http';

export const makeRemoteLoadEpisodes = (id: string): LoadEpisodesList =>
  new RemoteLoadEpisodeList(
    makeApiUrl(`/${id}/episodes'`),
    makeAxiosHttpClient(),
  );
