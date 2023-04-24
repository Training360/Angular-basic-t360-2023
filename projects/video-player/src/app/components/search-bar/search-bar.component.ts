import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  phrase: string = '';

  searchEvent(event : Event): void {
      this.phrase = (event.target as HTMLInputElement).value;
  }
}
