import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: UsersTableComponent,
  },
  {
    path: 'users/:id',
    component: UserFormComponent,
  },
  {
    path: '**',
    component: UsersTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
