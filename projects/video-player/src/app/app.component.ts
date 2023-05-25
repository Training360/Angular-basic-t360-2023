import { Component, inject } from '@angular/core';
import { Video } from './model/video';
import { VideoService } from './service/video.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-player';

  videos: any = [];
  selectedVideo: Video = new Video();

  videoService: VideoService = inject(VideoService);

  searchVideos(query: string) {
    this.videoService.getVideos(query).subscribe((response) => {
      this.videos = response;
      this.selectedVideo = this.videos[0];
    });
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }
}
