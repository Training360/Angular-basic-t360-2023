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
  videoSrc: string = '';

  /*

  // In Vue.js

  const videoSrc = computed(() => {
  const baseSrc = 'https://youtube.com/embed/'
  return props.video.id.videoId
    ? baseSrc + props.video.id.videoId
    : `${baseSrc}videoseries?list=${props.video.id.playlistId}`
  })
  */
}
