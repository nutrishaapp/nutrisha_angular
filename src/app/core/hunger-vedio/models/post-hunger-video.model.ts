import { Media } from '../../shared/models/media';

export interface PostHungerVideoModel {
  subject: string;
  tagId: string;
  media: Media[];
  id: string;
}
