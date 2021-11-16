import {LoadInfo, UnexpectedError} from '../../domain';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteLoadInfo implements LoadInfo {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadInfo.Model>,
  ) {}

  async load(): Promise<LoadInfo.Model> {
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
