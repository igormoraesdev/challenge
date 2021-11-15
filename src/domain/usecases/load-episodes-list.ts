import {EpisodesModel} from '..';

export interface LoadEpisodesList {
  load: () => Promise<LoadEpisodesList.Model>;
}

export namespace LoadEpisodesList {
  export type Model = EpisodesModel[] | undefined;
}
