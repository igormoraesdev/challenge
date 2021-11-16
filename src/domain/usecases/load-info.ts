import {ShowInfoModel} from '..';

export interface LoadInfo {
  load: () => Promise<LoadInfo.Model>;
}

export namespace LoadInfo {
  export type Model = ShowInfoModel | undefined;
}
