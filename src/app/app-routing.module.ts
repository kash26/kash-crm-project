import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { OrderComponent } from './order/order.component';
import { ShowOrderComponent } from './order/show-order/show-order.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { ProductComponent } from './product/product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { SellerComponent } from './seller/seller.component';
import { ShowSellerComponent } from './seller/show-seller/show-seller.component';
import { ShopComponent } from './shop/shop.component';
import { ShowShopComponent } from './shop/show-shop/show-shop.component';
import { ManagerComponent } from './manager/manager.component';
import { ShowManagerComponent } from './manager/show-manager/show-manager.component';
import { ShopPortalRoutingModule } from './shop-portal/shop-portal-routing.module';
import { SellerPortalRoutingModule } from './seller-portal/seller-portal-routing.module';
import { MasterComponent } from './master/master.component';
import { ShowMasterComponent } from './master/show-master/show-master.component';


const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'orders/:id',
    component: ShowOrderComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'orders',
    component: OrderComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'add-order',
    component: AddOrderComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'sellers/:id',
    component: ShowSellerComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'sellers',
    component: SellerComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'products/:id',
    component: ShowProductComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'products',
    component: ProductComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'shops/:id',
    component: ShowShopComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'shops',
    component: ShopComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'managers/:id',
    component: ShowManagerComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'managers',
    component: ManagerComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'masters/:master_id',
    component: ShowMasterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'masters',
    component: MasterComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'no-access',
    component: NoAccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    ShopPortalRoutingModule,
    SellerPortalRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
