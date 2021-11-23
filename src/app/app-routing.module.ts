import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LeftSideBarComponent } from "./shared/left-side-bar/left-side-bar.component";
import { PreLoaderComponent } from "./shared/pre-loader/pre-loader.component";
import { HeaderComponent } from "./shared/header/header.component";
import { SharedModule, sharedModuleComponents } from "./shared/shared.module";
import { RightSidebarComponent } from "./shared/right-sidebar/right-sidebar.component";
import { DashBoardComponent } from "./pages/dash-board/dash-board.component";
import { CreateProductComponent } from "./pages/product/create-product/create-product.component";
import { CreateCategoryComponent } from "./pages/categories/create-category/create-category.component";
import { ViewCategoryComponent } from "./pages/categories/view-category/view-category.component";
import { ListProductComponent } from "./pages/list-product/list-product.component";
import { ListOrdersComponent } from "./pages/orders/list-orders/list-orders.component";
import { CreateUserComponent } from "./pages/user-management/create-user/create-user.component";
import { ViewUserComponent } from "./pages/user-management/view-user/view-user.component";


const routes: Routes = [
    
    {path: 'dash-board', component: DashBoardComponent},
    {path: 'create-category', component: CreateCategoryComponent},
    {path: 'view-category', component: ViewCategoryComponent},
    {path: 'list-orders', component: ListOrdersComponent},
    {path: 'create-product', redirectTo:"create-users", component: CreateProductComponent},
    {path: 'list-product', component: ListProductComponent},
    {path: 'create-user', component: CreateUserComponent, pathMatch:'full'},
    {path: 'view-user', component: ViewUserComponent, pathMatch:'full'},
    
     
]

@NgModule({
    imports: [RouterModule.forRoot(routes), SharedModule],
    exports: [RouterModule],

})
export class AppRoutingModule {
    
}
export const routingModuleComponents = [
    HomeComponent,DashBoardComponent, CreateProductComponent, ListProductComponent, CreateCategoryComponent, ViewCategoryComponent, ListOrdersComponent, CreateUserComponent, ViewUserComponent
]
