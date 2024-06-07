import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { HungerVideosActions } from './hunger-videos.actions';
import { HungerVedioService } from '../../hunger-vedio/services/hunger-vedio.service';
import { HungerVideoParser } from '../../hunger-vedio/parser/hunger-video.parser';
import { HungerVideoListModel } from '../../hunger-vedio/models/hunger-video-list.model';
import { HungerVideoDetailsViewModel } from '../../hunger-vedio/view-models/hunger-video-details.view.model';

interface HungerVideoStateModel {
  totalRows: number;
  hungerVideosPage: HungerVideoListModel[];
  lastLoadedHungerVideo: HungerVideoDetailsViewModel;
}

@Injectable()
@State<HungerVideoStateModel>({
  name: 'hungerVideos',
})
export class HungerVideosState {
  constructor(private hungerVideoService: HungerVedioService) { }

  // @Action(HungerVideosActions.LoadHungerVideosPage)
  // getPagedList(
  //   ctx: StateContext<HungerVideoStateModel>,
  //   action: HungerVideosActions.LoadHungerVideosPage
  // ) {
  //   return this.hungerVideoService.getPagedList(action.queryParams).pipe(
  //     tap((result) => {
  //       const data = result.data;
  //       ctx.setState({
  //         ...ctx.getState(),
  //         hungerVideosPage: data,
  //         totalRows: result.totalRows,
  //         lastLoadedHungerVideo: undefined,
  //       });
  //     })
  //   );
  // }

  @Action(HungerVideosActions.LoadHungerVideosPage)
  getById(
    ctx: StateContext<HungerVideoStateModel>,
    action: HungerVideosActions.LoadHungerVideosPage
  ) {
    return this.hungerVideoService.getById(action.queryParams.entityId).pipe(
      tap((result) => {
        const data = result.data;
        ctx.setState({
          ...ctx.getState(),
          lastLoadedHungerVideo: HungerVideoParser.toViewModel(data),
        });
      })
    );
  }
}
