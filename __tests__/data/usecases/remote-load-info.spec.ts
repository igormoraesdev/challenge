import faker from 'faker';

import {HttpStatusCode} from '../../../src/data/protocols/http';
import {RemoteLoadInfo} from '../../../src/data/usecases';
import {LoadInfo, UnexpectedError} from '../../../src/domain';
import {HttpClientSpy, mockRemoteInfoDetailsModel} from '../mocks';

type SutTypes = {
  sut: RemoteLoadInfo;
  httpClientSpy: HttpClientSpy<LoadInfo.Model>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<LoadInfo.Model>();
  const sut = new RemoteLoadInfo(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteLoadInfo', () => {
  test('Should call HttpClient with correct', async () => {
    const url = faker.internet.url();
    const {sut, httpClientSpy} = makeSut(url);

    await sut.load();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('get');
  });

  test('Should return a list of episodes if HttpClient returns 200', async () => {
    const {sut, httpClientSpy} = makeSut();
    const httpResult = mockRemoteInfoDetailsModel();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const surveyList = await sut.load();

    expect(surveyList).toEqual([
      {
        id: httpResult?.id,
        url: httpResult?.url,
        name: httpResult?.name,
        type: httpResult?.type,
        language: httpResult?.language,
        genres: [
          httpResult?.genres[0],
          httpResult?.genres[1],
          httpResult?.genres[2],
        ],
        status: httpResult?.status,
        runtime: httpResult?.runtime,
        averageRuntime: httpResult?.averageRuntime,
        premiered: httpResult?.premiered,
        ended: httpResult?.ended,
        officialSite: httpResult?.officialSite,
        schedule: {
          time: httpResult?.schedule?.time,
          days: httpResult?.schedule?.days,
        },
        rating: {
          average: httpResult?.rating?.average,
        },
        weight: httpResult?.weight,
        network: {
          id: httpResult?.network?.id,
          name: httpResult?.network?.name,
          country: {
            name: httpResult?.network?.country?.name,
            code: httpResult?.network?.country?.code,
            timezone: httpResult?.network?.country?.timezone,
          },
        },
        webChannel: httpResult?.webChannel,
        dvdCountry: httpResult?.dvdCountry,
        externals: {
          tvrage: httpResult?.externals?.tvrage,
          thetvdb: httpResult?.externals?.thetvdb,
          imdb: httpResult?.externals?.imdb,
        },
        image: {
          medium: httpResult?.image?.medium,
          original: httpResult?.image?.original,
        },
        summary: httpResult?.summary,
        updated: httpResult?.updated,
        _links: {
          self: {
            href: httpResult?._links?.self?.href,
          },
          previousepisode: {
            href: httpResult?._links?.previousepisode?.href,
          },
        },
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
