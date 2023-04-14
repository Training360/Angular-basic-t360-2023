import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { GuitarsListComponent } from './components/guitars-list/guitars-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    GuitarsListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
