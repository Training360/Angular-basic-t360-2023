import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarsListComponent } from './components/guitars-list/guitars-list.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: GuitarsListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    component: GuitarsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
