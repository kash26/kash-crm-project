import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerShopProductComponent } from './seller-shop-product/seller-shop-product.component';
import { ShowSellerProductComponent } from './seller-shop-product/show-seller-product/show-seller-product.component';
import { SellerShopOrderComponent } from './seller-shop-order/seller-shop-order.component';
import { ShowSellerOrderComponent } from './seller-shop-order/show-seller-order/show-seller-order.component';
import { SellerShopComponent } from './seller-shop/seller-shop.component';
import { ShowSellerComponent } from './seller-shop/show-seller/show-seller.component';

const routes: Routes = [
  {
    path: 'seller-dashboard/:shop_id',
    component: SellerDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-shop-order/:shop_id',
    component: SellerShopOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-show-order/:shop_id/:order_id',
    component: ShowSellerOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-shop-products/:shop_id',
    component: SellerShopProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'seller-show-product/:shop_id/:product_id',
    component: ShowSellerProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop-seller/:shop_id/:seller_id',
    component: SellerShopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'show-seller-portal/:shop_id/:seller_id',
    component: ShowSellerComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SellerPortalRoutingModule { }
