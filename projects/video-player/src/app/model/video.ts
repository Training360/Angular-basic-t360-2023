export class Video {
  [key: string]: any;
  videoId?: string = '';
  videoUrl: string = '';
  channelId?: string = '';
  channelUrl?: string = '';
  channelTitle?: string = '';
  title: string = '';
  publishedAt?: Date = new Date();
  description: string = '';
  thumbnail: string = '';
}
