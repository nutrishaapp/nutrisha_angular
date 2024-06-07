import { BlogTagDetailsModel } from '../../blogs';
import { Media } from '../../shared/models/media';

export class HungerVideoDetailsModel {
  id: string;
  subject: string;
  created: Date;
  media: Media[];
  tag: BlogTagDetailsModel;
}
