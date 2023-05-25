import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { Video } from 'src/app/model/video';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  videoService: VideoService = inject(VideoService);
  query: string = '';

  @Input() videos$: Observable<Video[]> = this.videoService.getVideos(this.query)
  @Output() selectVideo: EventEmitter<Video> = new EventEmitter<Video>();

  onVideoClick(video: Video) {
    this.selectVideo.emit(video);
  }
}
