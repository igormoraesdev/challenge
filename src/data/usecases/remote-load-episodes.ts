import {LoadEpisodesList, UnexpectedError} from '../../domain';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteLoadEpisodeList implements LoadEpisodesList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadEpisodesList.Model>,
  ) {}

  async load(): Promise<LoadEpisodesList.Model> {
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
