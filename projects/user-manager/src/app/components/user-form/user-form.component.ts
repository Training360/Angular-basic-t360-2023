import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  userService: UserService = inject(UserService);

  user$: Observable<User> = of(new User());

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

   ngOnInit(): void {
    this.userService.getAll();
    this.activatedRoute.params.subscribe(
      params => {
        if (params['id'] == 0) {
          this.user$ = of(new User());
        } else {
          this.user$ = this.userService.get(params['id']);
        }
      })
   }

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

