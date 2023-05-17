import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  toastr: ToastrService = inject(ToastrService);

  showSuccessWithTimeout(message: string, title: string, timespan: number){
    this.toastr.success(message, title ,{
      timeOut :  timespan
    })
  }

  showUpdatedWithTimeout(message: string, title: string, timespan: number){
    this.toastr.warning(message, title ,{
      timeOut :  timespan
    })
  }

  showDeletedWithTimeout(message: string, title: string, timespan: number){
    this.toastr.error(message, title ,{
      timeOut :  timespan
    })
  }
}
