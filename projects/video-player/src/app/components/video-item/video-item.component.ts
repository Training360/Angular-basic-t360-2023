import { ElementRef } from '@angular/core';
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

  constructor(public elementRef: ElementRef) {}
}
