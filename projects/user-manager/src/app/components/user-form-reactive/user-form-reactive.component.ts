import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Observable, switchMap, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-form-reactive',
  standalone: true,
  imports: [CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './user-form-reactive.component.html',
  styleUrls: ['./user-form-reactive.component.scss']
})
export class UserFormReactiveComponent {

  userService: UserService = inject(UserService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  formBuilder: FormBuilder = inject(FormBuilder);

  userForm = new FormGroup({
    id: new FormControl<number>(0, {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
    emailAddress: new FormControl<string>('', {
      nonNullable: true,
      validators: [
          Validators.required,
          Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        ]
    }),
    firstName: new FormControl<string>('', {
      nonNullable: true,
      validators: [
          Validators.required,
          Validators.pattern('^[A-Z][a-z]{2,14}')
       ]
    }),
    lastName: new FormControl<string>('', {
      nonNullable: true,
      validators: [
          Validators.required,
          Validators.pattern('^[A-Z].{2,24}')
        ]
    }),
  });

  user: User = new User();

  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap((params) =>
      params['id'] != '0' ? this.userService.get(params['id']) : of(new User())
    )
  );

  saveIcon = faFloppyDisk;

  handleFormSubmit(): void {
      this.userService.add(this.userForm.value).then(
        () => this.router.navigate([''])
      );
  }
}
