import faker from 'faker';

import {HttpStatusCode} from '../../../src/data/protocols/http';
import {RemoteLoadSeasons} from '../../../src/data/usecases';
import {LoadSeasonsList, UnexpectedError} from '../../../src/domain';
import {HttpClientSpy, mockRemoteSeasonListModel} from '../mocks';

type SutTypes = {
  sut: RemoteLoadSeasons;
  httpClientSpy: HttpClientSpy<LoadSeasonsList.Model>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<LoadSeasonsList.Model>();
  const sut = new RemoteLoadSeasons(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteLoadSeasons', () => {
  test('Should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url();
    const {sut, httpClientSpy} = makeSut(url);

    await sut.load();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('get');
  });

  test('Should return a list of episodes if HttpClient returns 200', async () => {
    const {sut, httpClientSpy} = makeSut();
    const httpResult = mockRemoteSeasonListModel();
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
        number: httpResult[0]?.number,
        episodeOrder: httpResult[0]?.episodeOrder,
        image: httpResult[0]?.image,
        webChannel: httpResult[0]?.webChannel,
        summary: httpResult[0]?.summary,
        premiereDate: httpResult[0]?.premiereDate,
        endDate: httpResult[0]?.endDate,
        network: {
          id: httpResult[0]?.network?.id,
          name: httpResult[0]?.network?.name,
          country: {
            name: httpResult[0]?.network?.country?.name,
            code: httpResult[0]?.network?.country?.code,
            timezone: httpResult[0]?.network?.country?.timezone,
          },
        },
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
