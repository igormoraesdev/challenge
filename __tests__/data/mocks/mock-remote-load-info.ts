import faker from 'faker';

import {ShowInfoModel} from '../../../src/domain';

export const mockRemoteInfoModel = (): ShowInfoModel => ({
  id: Number(faker.datatype.uuid()),
  url: faker.internet.url(),
  name: faker.random.words(10),
  type: faker.datatype.string(),
  language: faker.datatype.string(),
  genres: [
    faker.datatype.string(),
    faker.datatype.string(),
    faker.datatype.string(),
  ],
  status: faker.datatype.string(),
  runtime: faker.datatype.number(),
  averageRuntime: faker.datatype.number(),
  premiered: faker.datatype.string(),
  ended: null,
  officialSite: faker.internet.url(),
  schedule: {
    time: faker.datatype.string(),
    days: [faker.datatype.string()],
  },
  rating: {
    average: faker.datatype.number(),
  },
  weight: faker.datatype.number(),
  network: {
    id: faker.datatype.number(),
    name: faker.datatype.string(),
    country: {
      name: faker.datatype.string(),
      code: faker.datatype.string(),
      timezone: faker.datatype.string(),
    },
  },
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: null,
    thetvdb: faker.datatype.number(),
    imdb: faker.datatype.string(),
  },
  image: {
    medium: faker.internet.url(),
    original: faker.internet.url(),
  },
  summary: faker.datatype.string(),
  updated: 1573685920,
  _links: {
    self: {
      href: faker.internet.url(),
    },
    previousepisode: {
      href: faker.internet.url(),
    },
  },
});

export const mockRemoteInfoDetailsModel = (): ShowInfoModel =>
  mockRemoteInfoModel();
