import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  userService: UserService = inject(UserService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  user: User = new User();

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap((params) =>
      params['id'] != '0' ? this.userService.get(params['id']) : of(new User())
    )
  );

  saveIcon = faFloppyDisk;

  handleFormSubmit(userForm: NgForm, user: User): void {
    if (user.id == 0) {
      this.userService.create(user).subscribe(
        () => this.router.navigate([''])
        );
    } else {
      this.userService.update(user).subscribe(
        () => this.router.navigate([''])
      );
    }
  }

}

