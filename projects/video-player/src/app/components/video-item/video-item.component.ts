import { Component, Input } from '@angular/core';
import { Video } from 'src/app/model/video';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent {

  @Input() video: Video = new Video();

}
