import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopPortalRoutingModule } from './shop-portal-routing.module';
import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ShopNavbarComponent } from './shop-navbar/shop-navbar.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { ShopOrderComponent } from './shop-order/shop-order.component';
import { ShopSellerComponent } from './shop-seller/shop-seller.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { AddEditDeleteOrderComponent } from './shop-order/add-edit-delete-order/add-edit-delete-order.component';
import { ShowOrderComponent } from './shop-order/show-order/show-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditDeleteProductComponent } from './shop-product/add-edit-delete-product/add-edit-delete-product.component';
import { ShowProductComponent } from './shop-product/show-product/show-product.component';
import { AddEditDeleteSellerComponent } from './shop-seller/add-edit-delete-seller/add-edit-delete-seller.component';
import { ShowSellerComponent } from './shop-seller/show-seller/show-seller.component';
import { ShopMasterComponent } from './shop-master/shop-master.component';
import { AddEditDeleteMasterComponent } from './shop-master/add-edit-delete-master/add-edit-delete-master.component';
import { ShowMasterComponent } from './shop-master/show-master/show-master.component';

@NgModule({
  declarations: [
    ShopDashboardComponent,
    ShopNavbarComponent,
    ShopSidebarComponent,
    ShopOrderComponent,
    ShopSellerComponent,
    ShopProductComponent,
    AddEditDeleteOrderComponent,
    ShowOrderComponent,
    AddEditDeleteProductComponent,
    ShowProductComponent,
    AddEditDeleteSellerComponent,
    ShowSellerComponent,
    ShopMasterComponent,
    AddEditDeleteMasterComponent,
    ShowMasterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ShopPortalRoutingModule
  ]
})
export class ShopPortalModule { }
