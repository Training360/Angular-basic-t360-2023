import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { GuitarsListComponent } from './components/guitars-list/guitars-list.component';
import { GuitarItemComponent } from './components/guitar-item/guitar-item.component';
import { GuitarImageComponent } from './components/guitar-image/guitar-image.component';
import { GuitarTitleComponent } from './components/guitar-title/guitar-title.component';
import { GuitarPriceComponent } from './components/guitar-price/guitar-price.component';
import { GuitarRatingComponent } from './components/guitar-rating/guitar-rating.component';
import { GuitarStockComponent } from './components/guitar-stock/guitar-stock.component';
import { GuitarDescriptionComponent } from './components/guitar-description/guitar-description.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { DelayDirective } from './directive/delay.directive';
@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    GuitarsListComponent,
    GuitarItemComponent,
    GuitarImageComponent,
    GuitarTitleComponent,
    GuitarPriceComponent,
    GuitarRatingComponent,
    GuitarStockComponent,
    CartButtonComponent,
    GuitarDescriptionComponent,
    ShoppingCartComponent,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
