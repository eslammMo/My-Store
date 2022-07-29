import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'productList', component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:'Details/:id',component:ProductItemDetailComponent},
  {path:'confirmation',component:ConfirmationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
