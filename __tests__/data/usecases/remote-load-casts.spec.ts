import faker from 'faker';

import {HttpStatusCode} from '../../../src/data/protocols/http';
import {RemoteLoadCasts} from '../../../src/data/usecases';
import {LoadCastsList, UnexpectedError} from '../../../src/domain';
import {HttpClientSpy, mockRemoteCastListModel} from '../mocks';

type SutTypes = {
  sut: RemoteLoadCasts;
  httpClientSpy: HttpClientSpy<LoadCastsList.Model>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<LoadCastsList.Model>();
  const sut = new RemoteLoadCasts(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteLoadCasts', () => {
  test('Should call HttpClient with correct', async () => {
    const url = faker.internet.url();
    const {sut, httpClientSpy} = makeSut(url);

    await sut.load();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('get');
  });

  test('Should return a list of episodes if HttpClient returns 200', async () => {
    const {sut, httpClientSpy} = makeSut();
    const httpResult = mockRemoteCastListModel();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const surveyList = await sut.load();

    expect(surveyList).toEqual([
      {
        person: {
          id: httpResult[0]?.person?.id,
          url: httpResult[0]?.person?.url,
          name: httpResult[0]?.person?.name,
          country: {
            name: httpResult[0]?.person?.country?.name,
            code: httpResult[0]?.person?.country?.code,
            timezone: httpResult[0]?.person?.country?.timezone,
          },
          birthday: httpResult[0]?.person?.birthday,
          deathday: httpResult[0]?.person?.deathday,
          gender: httpResult[0]?.person?.gender,
          image: {
            medium: httpResult[0]?.person?.image?.medium,
            original: httpResult[0]?.person?.image?.original,
          },
          updated: httpResult[0]?.person?.updated,
          _links: {
            self: {
              href: httpResult[0]?.person?._links?.self?.href,
            },
          },
        },
        character: {
          id: httpResult[0]?.character?.id,
          url: httpResult[0]?.character?.url,
          name: httpResult[0]?.character?.name,
          image: {
            medium: httpResult[0]?.character?.image?.medium,
            original: httpResult[0]?.character?.image?.original,
          },
          _links: {
            self: {
              href: httpResult[0]?.character?._links?.self?.href,
            },
          },
        },
        self: false,
        voice: true,
      },
    ]);
  });

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const {sut, httpClientSpy} = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.load();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
