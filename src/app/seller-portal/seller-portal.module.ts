import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SellerPortalRoutingModule } from './seller-portal-routing.module';
import { SellerShopComponent } from './seller-shop/seller-shop.component';
import { SellerShopProductComponent } from './seller-shop-product/seller-shop-product.component';
import { SellerShopOrderComponent } from './seller-shop-order/seller-shop-order.component';
import { SellerNavbarComponent } from './seller-navbar/seller-navbar.component';
import { SellerSidebarComponent } from './seller-sidebar/seller-sidebar.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { AddEditDeleteSellerComponent } from './seller-shop/add-edit-delete-seller/add-edit-delete-seller.component';
import { ShowSellerComponent } from './seller-shop/show-seller/show-seller.component';
import { AddEditDeleteOrderComponent } from './seller-shop-order/add-edit-delete-order/add-edit-delete-order.component';
import { ShowSellerOrderComponent } from './seller-shop-order/show-seller-order/show-seller-order.component';
import { ShowSellerProductComponent } from './seller-shop-product/show-seller-product/show-seller-product.component';


@NgModule({
  declarations: [
    SellerShopComponent,
    SellerShopProductComponent,
    SellerShopOrderComponent,
    SellerNavbarComponent,
    SellerSidebarComponent,
    SellerDashboardComponent,
    AddEditDeleteSellerComponent,
    ShowSellerComponent,
    AddEditDeleteOrderComponent,
    ShowSellerOrderComponent,
    ShowSellerProductComponent],
  imports: [
    CommonModule,
    SellerPortalRoutingModule,
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SellerPortalModule { }
