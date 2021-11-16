import {LoadSeasonsList, UnexpectedError} from '../../domain';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteLoadSeasons implements LoadSeasonsList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadSeasonsList.Model>,
  ) {}

  async load(): Promise<LoadSeasonsList.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }
}
