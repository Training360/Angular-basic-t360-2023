import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guitar-title',
  templateUrl: './guitar-title.component.html',
  styleUrls: ['./guitar-title.component.scss']
})
export class GuitarTitleComponent {
  @Input() title: string ='';
}
