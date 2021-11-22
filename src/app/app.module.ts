import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { CreateCategoryComponent } from './pages/categories/create-category/create-category.component';
import { ViewCategoryComponent } from './pages/categories/view-category/view-category.component';
import { CreateUserComponent } from './pages/user-management/create-user/create-user.component';
import { ViewUserComponent } from './pages/user-management/view-user/view-user.component';
import { ListOrdersComponent } from './pages/orders/list-orders/list-orders.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashBoardComponent,
    CreateProductComponent,
    ListProductComponent,
    CreateCategoryComponent,
    ViewCategoryComponent,
    CreateUserComponent,
    ViewUserComponent,
    ListOrdersComponent
  ],
  imports: [
    
    AppRoutingModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
