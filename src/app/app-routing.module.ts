import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LeftSideBarComponent } from "./shared/left-side-bar/left-side-bar.component";
import { PreLoaderComponent } from "./shared/pre-loader/pre-loader.component";
import { HeaderComponent } from "./shared/header/header.component";
import { SharedModule } from "./shared/shared.module";
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
    {path: '', component: HomeComponent, children: [
        {path: '', component: HomeComponent, pathMatch:'full'},
        {path: '', component: PreLoaderComponent},
        {path: '', component: HeaderComponent},
        {path: '', component: LeftSideBarComponent}, 
        {path: '', component: RightSidebarComponent}
    ]},
    {path: 'dashboard', component: DashBoardComponent,pathMatch:'full'},
    {path: 'orders', children: [
        {path: 'list-orders', component: ListOrdersComponent,pathMatch:'full'},
    ]},
    
    {path: 'Categories', children: [
        {path: 'create-category', component: CreateCategoryComponent},
        {path: 'view-categories', component: ViewCategoryComponent}
    ]},
    {path: 'product', children: [
        {path: 'create-product', redirectTo:"create-users", component: CreateProductComponent, pathMatch:'full'},
        {path: 'list-product', component: ListProductComponent, pathMatch:'full'},
    ]},
    {path: 'user-management', children: [
        {path: 'create-user', component: CreateUserComponent, pathMatch:'full'},
        {path: 'view-user', component: ViewUserComponent, pathMatch:'full'},
    ]},

]

@NgModule({
    
    imports: [RouterModule.forRoot(routes),
    
        
    ],
    exports: [RouterModule,
        
        CreateProductComponent,
        ListProductComponent,
        CreateCategoryComponent,
        ViewCategoryComponent,
        CreateUserComponent,
        ViewUserComponent,
        ListOrdersComponent
    ],

})
export class AppRoutingModule {
    
}