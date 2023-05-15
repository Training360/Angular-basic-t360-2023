import { Component, Input } from '@angular/core';
import { Guitar } from 'src/app/model/guitar';

@Component({
  selector: 'app-guitar-item',
  templateUrl: './guitar-item.component.html',
  styleUrls: ['./guitar-item.component.scss']
})
export class GuitarItemComponent {
  @Input() guitar: Guitar = new Guitar();
}
