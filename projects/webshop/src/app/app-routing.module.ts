import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarsListComponent } from './components/guitars-list/guitars-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: GuitarsListComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
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
