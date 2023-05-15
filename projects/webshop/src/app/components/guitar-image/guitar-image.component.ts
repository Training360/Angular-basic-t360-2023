import { Component, Input } from '@angular/core';
import { Guitar } from 'src/app/model/guitar';

@Component({
  selector: 'app-guitar-image',
  templateUrl: './guitar-image.component.html',
  styleUrls: ['./guitar-image.component.scss']
})
export class GuitarImageComponent {
  @Input() title: string ='';
}
