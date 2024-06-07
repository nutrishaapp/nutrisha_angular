import { PagedListQueryModel } from '../../shared/models/paged-list-query.model';

export namespace HungerVideosActions {
  export class LoadHungerVideosPage {
    public static type = '[HungerVideos] Load HungerVideos Page';

    constructor(public queryParams: PagedListQueryModel) { }
  }

  export class LoadHungerVideosDetails {
    public static type = '[HungerVideos] Load HungerVideo Details';
    constructor(public id: string) { }
  }
}
