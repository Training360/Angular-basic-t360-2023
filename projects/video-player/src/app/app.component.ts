import { Component, inject } from '@angular/core';
import { Video } from './model/video';
import { VideoService } from './service/video.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'video-player';
  phrase : string = '';

  videoService: VideoService = inject(VideoService);

  searchVideo(event : Event): void {
      this.phrase = (event.target as HTMLInputElement).value;
  }

  /*
  selectedVideo: Video = new Video();

  onVideoSelected(video: Video) {
    this.selectedVideo = video;
  }
  */

}
