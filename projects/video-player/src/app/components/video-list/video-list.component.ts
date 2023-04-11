import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from 'src/app/model/video';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {

  videoService: VideoService = inject(VideoService);

  videos$: Observable<Video[]> = this.videoService.getAll();

}
