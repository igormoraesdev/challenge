import faker from 'faker';

import {HttpStatusCode} from '../../../src/data/protocols/http';
import {RemoteLoadEpisodeList} from '../../../src/data/usecases';
import {LoadEpisodesList, UnexpectedError} from '../../../src/domain';
import {HttpClientSpy, mockRemoteEpisodeListModel} from '../mocks';

type SutTypes = {
  sut: RemoteLoadEpisodeList;
  httpClientSpy: HttpClientSpy<LoadEpisodesList.Model>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<LoadEpisodesList.Model>();
  const sut = new RemoteLoadEpisodeList(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteLoadEpisodeList', () => {
  test('Should call HttpClient with correct', async () => {
    const url = faker.internet.url();
    const {sut, httpClientSpy} = makeSut(url);

    await sut.load();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('get');
  });

  test('Should return a list of episodes if HttpClient returns 200', async () => {
    const {sut, httpClientSpy} = makeSut();
    const httpResult = mockRemoteEpisodeListModel();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const surveyList = await sut.load();

    expect(surveyList).toEqual([
      {
        id: httpResult[0]?.id,
        url: httpResult[0]?.url,
        name: httpResult[0]?.name,
        season: httpResult[0]?.season,
        number: httpResult[0]?.number,
        type: httpResult[0]?.type,
        airdate: httpResult[0]?.airdate,
        airtime: httpResult[0]?.airtime,
        airstamp: httpResult[0]?.airstamp,
        runtime: httpResult[0]?.runtime,
        rating: {
          average: httpResult[0]?.rating?.average,
        },
        image: {
          medium: httpResult[0]?.image?.medium,
          original: httpResult[0]?.image?.original,
        },
        summary: httpResult[0]?.summary,
        _links: {
          self: {
            href: httpResult[0]?._links?.self?.href,
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
