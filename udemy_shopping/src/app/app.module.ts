import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { BasketComponent } from './components/basket/basket.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule as BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { OrderComponent } from './components/order/order.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    BasketComponent,
    PaymentComponent,
    ProductAddComponent,
    OrderComponent,
    LayoutsComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      closeButton: true,
      progressBar: true,
      timeOut: 2000,
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
