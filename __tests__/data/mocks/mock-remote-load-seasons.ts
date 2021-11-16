import faker from 'faker';

import {SeasonsModel} from '../../../src/domain';

export const mockRemoteSeasonsModel = (): SeasonsModel => ({
  id: Number(faker.datatype.uuid()),
  url: faker.internet.url(),
  name: faker.random.words(10),
  number: faker.datatype.number(),
  episodeOrder: faker.datatype.number(),
  image: null,
  webChannel: null,
  summary: null,
  premiereDate: faker.datatype.string(),
  endDate: faker.datatype.string(),
  network: {
    id: faker.datatype.number(),
    name: faker.datatype.string(),
    country: {
      name: faker.datatype.string(),
      code: faker.datatype.string(),
      timezone: faker.datatype.string(),
    },
  },
  _links: {
    self: {
      href: faker.datatype.string(),
    },
  },
});

export const mockRemoteSeasonListModel = (): SeasonsModel[] => [
  mockRemoteSeasonsModel(),
];
