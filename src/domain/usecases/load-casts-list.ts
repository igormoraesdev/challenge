import {CastModel} from '../models/cast';

export interface LoadCastsList {
  load: () => Promise<LoadCastsList.Model>;
}

export namespace LoadCastsList {
  export type Model = CastModel[] | undefined;
}
