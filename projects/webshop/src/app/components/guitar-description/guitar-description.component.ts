import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guitar-description',
  templateUrl: './guitar-description.component.html',
  styleUrls: ['./guitar-description.component.scss']
})
export class GuitarDescriptionComponent {
  @Input() description: string ='';
}
