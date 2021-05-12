import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';
import { ShopOrderComponent } from './shop-order/shop-order.component';
import { ShowOrderComponent } from '../shop-portal/shop-order/show-order/show-order.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { ShowProductComponent } from './shop-product/show-product/show-product.component';
import { ShopSellerComponent } from './shop-seller/shop-seller.component';
import { ShowSellerComponent } from './shop-seller/show-seller/show-seller.component';
import { AuthGuard } from '../services/auth-guard.service';
import { ShopMasterComponent } from './shop-master/shop-master.component';
import { ShowMasterComponent } from './shop-master/show-master/show-master.component';

const routes: Routes = [
  {
    path: 'shop-dashboard/:shop_id',
    component: ShopDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop-order/:shop_id',
    component: ShopOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop-show-order/:shop_id/:order_id',
    component: ShowOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop-product/:shop_id',
    component: ShopProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop-show-product/:shop_id/:product_id',
    component: ShowProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop-seller/:shop_id',
    component: ShopSellerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop-show-seller/:shop_id/:seller_id',
    component: ShowSellerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop-master/:shop_id/:master_id',
    component: ShopMasterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'show-master/:shop_id/:master_id',
    component: ShowMasterComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ShopPortalRoutingModule { }
