import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Guitar } from 'src/app/model/guitar';
import { GuitarService } from 'src/app/service/guitar.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-guitars-list',
  templateUrl: './guitars-list.component.html',
  styleUrls: ['./guitars-list.component.scss']
})
export class GuitarsListComponent {
  guitarService: GuitarService = inject(GuitarService);

  guitars$: Observable<Guitar[]> = this.guitarService.getAll();
}
