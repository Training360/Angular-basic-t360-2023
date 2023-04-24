import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Video } from 'src/app/model/video';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent {

  @Input() video: Video = new Video();
  @Input() videos$: Observable<Video[]> = of([]);

  /*
  @Input() selectedVideo: Video | null = null;
  @Input() selectedVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  selectVideo(video: Video) {
    this.selectedVideo = video;
    const videoId = video.snippet.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
  */

}
