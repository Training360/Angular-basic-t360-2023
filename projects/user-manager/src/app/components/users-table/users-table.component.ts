import { Component, Input, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  userService: UserService = inject(UserService);
  users$: Observable<User[]> = this.userService.getAll();

  // Font Awesome
  editIcon = faPencil;
  deleteIcon = faTrashCan;

  // Search
  phrase : string = '';

  searchUser(event : Event): void {
      this.phrase = (event.target as HTMLInputElement).value;
  }

  // Delete
  handleDeleteClick(id: number): void {
    confirm('Are you sure?');
    this.userService.remove(id).subscribe(
      () => this.users$ = this.userService.getAll())
  }

  // Sort
  columnKey: string = '';

  onColumnSelect(key: string): void {
    this.columnKey = key;
  }

}
