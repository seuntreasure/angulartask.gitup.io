import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './pages/categories/create-category/create-category.component';
import { ViewCategoriesComponent } from './pages/categories/view-categories/view-categories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { ListOrdersComponent } from './pages/orders/list-orders/list-orders.component';
import { OrdersComponent } from './pages/orders/orders/orders.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { ViewProductComponent } from './pages/product/view-product/view-product.component';
import { CreateUserComponent } from './pages/user-management/create-user/create-user.component';
import { ViewUserComponent } from './pages/user-management/view-user/view-user.component';
const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product/create-product', component: CreateProductComponent},
  {path: 'product/list-product', component: ViewProductComponent},
  {path: 'orders/list-orders', component: ListOrdersComponent},
  {path: 'categories/create', component: CreateCategoryComponent},
  {path: 'categories/view', component: ViewCategoriesComponent},
  {path: 'user-management/create', component: CreateUserComponent},
  {path: 'user-management/view', component: ViewUserComponent},
  
  //{path: 'auth', loadChildren: () => import('../app/pages/auth/auth.module').then(m => m.AuthModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


