import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Guitar } from 'src/app/model/guitar';
import { GuitarService } from 'src/app/service/guitar.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-guitars-list',
  templateUrl: './guitars-list.component.html',
  styleUrls: ['./guitars-list.component.scss']
})
export class GuitarsListComponent {

  guitarService: GuitarService = inject(GuitarService);
  notifyService : NotificationService = inject(NotificationService);

  guitars$: Observable<Guitar[]> = this.guitarService.getAll();

  showSuccessToaster(){
    this.notifyService.showSuccessWithTimeout("Data shown successfully", "Notification", 5000)
  }
}
