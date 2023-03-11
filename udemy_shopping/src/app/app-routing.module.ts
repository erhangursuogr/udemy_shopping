import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrderComponent } from './components/order/order.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';

const routes: Routes = [
  {
    path: '', component: LayoutsComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'product-add', component: ProductAddComponent },
      { path: 'orders', component: OrderComponent }
    ],
  },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
