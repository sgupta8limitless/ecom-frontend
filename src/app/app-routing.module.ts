import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { ProductsComponent } from './pages/user/products/products.component';
import { UserComponent } from './pages/user/user/user.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"user",component:UserComponent,children:[
    {path:"products",component:ProductsComponent},
    {path:"cart",component:CartComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
