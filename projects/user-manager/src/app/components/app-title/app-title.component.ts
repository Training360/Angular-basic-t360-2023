import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { of } from 'rxjs';
import { Observable, interval, map, share } from 'rxjs';

@Component({
  selector: 'app-app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.scss']
})
export class AppTitleComponent {

  // Input
  @Input() title: string = '';
  @Input() message: string = '';

  // Output
  @Output() buttonWasClicked = new EventEmitter<void>();

  onButtonClick() {
    this.buttonWasClicked.emit();
  }

  // Lifecycle hook
  ngOnInit() {
    console.log('I am invoked only once.');
  }

  // Interval() clock
  clock: Observable<Date> = of(new Date());
  http: HttpClient = inject(HttpClient);

  constructor() {
    this.clock = interval(1000)
      .pipe(
      map(() => new Date()),
      share()
    );
  }

  getClock(): Observable<Date> {
    return this.clock;
  }
}
