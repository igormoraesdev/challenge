import faker from 'faker';

import {CastModel} from '../../../src/domain';

export const mockRemoteCastsModel = (): CastModel => ({
  person: {
    id: Number(faker.datatype.uuid()),
    url: faker.internet.url(),
    name: faker.random.words(10),
    country: {
      name: faker.datatype.string(),
      code: faker.datatype.string(),
      timezone: faker.datatype.string(),
    },
    birthday: faker.datatype.string(),
    deathday: null,
    gender: faker.datatype.string(),
    image: {
      medium: faker.internet.url(),
      original: faker.internet.url(),
    },
    updated: faker.datatype.number(),
    _links: {
      self: {
        href: faker.internet.url(),
      },
    },
  },
  character: {
    id: faker.datatype.number(),
    url: faker.internet.url(),
    name: faker.datatype.string(),
    image: {
      medium: faker.internet.url(),
      original: faker.internet.url(),
    },
    _links: {
      self: {
        href: faker.internet.url(),
      },
    },
  },
  self: false,
  voice: true,
});

export const mockRemoteCastListModel = (): CastModel[] => [
  mockRemoteCastsModel(),
];
