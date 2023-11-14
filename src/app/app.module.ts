import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlartsComponent } from './components/product-alarts/product-alarts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlartsComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    ShippingDetailsComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartDetailsComponent },
      { path: 'shipping', component: ShippingDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
