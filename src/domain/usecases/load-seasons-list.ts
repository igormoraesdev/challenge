import {SeasonsModel} from '..';

export interface LoadSeasonsList {
  load: () => Promise<LoadSeasonsList.Model>;
}

export namespace LoadSeasonsList {
  export type Model = SeasonsModel[] | undefined;
}
