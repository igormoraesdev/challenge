import {LoadCastsList, UnexpectedError} from '../../domain';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteLoadCasts implements LoadCastsList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadCastsList.Model>,
  ) {}

  async load(): Promise<LoadCastsList.Model> {
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
