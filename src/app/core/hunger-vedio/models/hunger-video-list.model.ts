import { BlogTagDetailsModel } from '../../blogs';
import { Media } from '../../shared/models/media';

export interface HungerVideoListModel {
  id: string;
  subject: string;
  tag: BlogTagDetailsModel;
  created: Date;
  media: Media[];
}

