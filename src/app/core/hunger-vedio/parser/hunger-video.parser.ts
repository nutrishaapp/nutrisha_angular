import { Media, MediaFlags } from '../../shared';
import { HungerVideoDetailsModel } from '../models/hunger-video-details.models';
import { HungerVideoDetailsViewModel } from '../view-models/hunger-video-details.view.model';

export class HungerVideoParser {
  static toViewModel(model: HungerVideoDetailsModel): HungerVideoDetailsViewModel {
    const viewModel = new HungerVideoDetailsViewModel();

    Object.assign(viewModel, model);
    viewModel.coverImage = Media.getMediaByFlag(
      model.media,
      MediaFlags.CoverImage
    );
    viewModel.mainVideo = Media.getMediaByFlag(
      model.media,
      MediaFlags.MainMedia
    );
    return viewModel;
  }
  static toModel(viewModel: HungerVideoDetailsViewModel): HungerVideoDetailsModel {
    const model = new HungerVideoDetailsModel();

    Object.assign(model, viewModel);
    viewModel.mainVideo[0].flags = ['MainMedia'];
    let media = [...viewModel.mainVideo];
    if (viewModel.coverImage && viewModel.coverImage.length) {
      viewModel.coverImage[0].flags = ['CoverImage'];
      media = [...media, ...viewModel.coverImage];
    }
    model.media = media;
    return model;
  }
}
