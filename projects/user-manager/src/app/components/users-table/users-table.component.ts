import { Input } from '@angular/core';
import { Component, Output, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  userService: UserService = inject(UserService);
  users$: Observable<User[]> = this.userService.getAll();

  phrase : string = '';

  searchUser(event : Event): void {
      this.phrase = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.userService.getAll();
  }

  handleDeleteClick(id: number): void {
    confirm('Are you sure?');
    this.userService.remove(id).subscribe(
      () => this.users$ = this.userService.getAll())
  }

}
