import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from 'src/app/model/video';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent {
  @Input() video: Video = new Video();

  get videoSrc(): string {
    const baseSrc = 'https://youtube.com/embed/';
    return this.video?.id?.videoId
      ? baseSrc + this.video.id.videoId
      : `${baseSrc}videoseries?list=${this.video?.id?.playlistId}`;
  }
}
