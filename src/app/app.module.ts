import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagerComponent } from './manager/manager.component';
import { ShowManagerComponent } from './manager/show-manager/show-manager.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { ShowOrderComponent } from './order/show-order/show-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { ShopComponent } from './shop/shop.component';
import { ShowShopComponent } from './shop/show-shop/show-shop.component';
import { AddEditShopComponent } from './shop/add-edit-shop/add-edit-shop.component';
import { ProductComponent } from './product/product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { AddEditProductComponent } from './product/add-edit-product/add-edit-product.component';
import { SellerComponent } from './seller/seller.component';
import { ShowSellerComponent } from './seller/show-seller/show-seller.component';
import { AddEditSellerComponent } from './seller/add-edit-seller/add-edit-seller.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AddEditDeleteManagerComponent } from './manager/add-edit-delete-manager/add-edit-delete-manager.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ShopPortalModule } from './shop-portal/shop-portal.module';
import { MasterComponent } from './master/master.component';
import { ShowMasterComponent } from './master/show-master/show-master.component';
import { AddEditDeleteMasterComponent } from './master/add-edit-delete-master/add-edit-delete-master.component';
import { SellerPortalModule } from './seller-portal/seller-portal.module';


@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    ShowManagerComponent,
    SignupComponent,
    SigninComponent,
    OrderComponent,
    ShowOrderComponent,
    EditOrderComponent,
    AddOrderComponent,
    NavbarComponent,
    ShopComponent,
    ShowShopComponent,
    AddEditShopComponent,
    ProductComponent,
    ShowProductComponent,
    AddEditProductComponent,
    SellerComponent,
    ShowSellerComponent,
    AddEditSellerComponent,
    NotFoundComponent,
    HomeComponent,
    NoAccessComponent,
    AddEditDeleteManagerComponent,
    MainSidebarComponent,
    MasterComponent,
    ShowMasterComponent,
    AddEditDeleteMasterComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ShopPortalModule,
    SellerPortalModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
