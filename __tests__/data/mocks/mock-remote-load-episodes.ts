import faker from 'faker';

import {EpisodesModel} from '../../../src/domain';

export const mockRemoteEpisodeModel = (): EpisodesModel => ({
  id: Number(faker.datatype.uuid()),
  url: faker.internet.url(),
  name: faker.random.words(10),
  season: faker.datatype.number(),
  number: faker.datatype.number(),
  type: faker.datatype.string(),
  airdate: faker.datatype.string(),
  airtime: faker.datatype.string(),
  airstamp: faker.datatype.string(),
  runtime: faker.datatype.number(),
  rating: {
    average: faker.datatype.number(),
  },
  image: {
    medium: faker.datatype.string(),
    original: faker.datatype.string(),
  },
  summary: faker.datatype.string(),
  _links: {
    self: {
      href: faker.datatype.string(),
    },
  },
});

export const mockRemoteEpisodeListModel = (): EpisodesModel[] => [
  mockRemoteEpisodeModel(),
];
