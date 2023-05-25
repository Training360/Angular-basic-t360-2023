import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() query: string = '';

  @Output() formSubmit: EventEmitter<string> = new EventEmitter<string>();

  submitForm() {
    this.formSubmit.emit(this.query);
  }
}
