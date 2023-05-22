import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { Observable, interval, map, share } from 'rxjs';

@Component({
  selector: 'app-app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.scss']
})
export class AppTitleComponent {
  @Input() title: string = '';

  clock: Observable<Date> = of(new Date());

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
