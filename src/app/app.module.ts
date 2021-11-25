import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { ViewProductComponent } from './pages/product/view-product/view-product.component';
import { ListOrdersComponent } from './pages/orders/list-orders/list-orders.component';
import { CreateCategoryComponent } from './pages/categories/create-category/create-category.component';
import { ViewCategoriesComponent } from './pages/categories/view-categories/view-categories.component';
import { CreateUserComponent } from './pages/user-management/create-user/create-user.component';
import { ViewUserComponent } from './pages/user-management/view-user/view-user.component';
import { OrdersComponent } from './pages/orders/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DashboardComponent,
    CreateProductComponent,
    ViewProductComponent,
    ListOrdersComponent,
    CreateCategoryComponent,
    ViewCategoriesComponent,
    CreateUserComponent,
    ViewUserComponent,
    OrdersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// so i just reset the project to the main branch which un did your mistakes.
// Go through the project to see the changes that was made
//  and then follow up my steps,, i will push my project to git and send you the link now so you follow 
// And replicate the route pattern to the task i gave you
// Give me some minutes to push 

//Okay-- awaiting link

