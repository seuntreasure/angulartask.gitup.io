import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreLoaderComponent } from 'src/app/shared/pre-loader/pre-loader.component';
import { HeaderComponent } from './header/header.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    PreLoaderComponent,
    HeaderComponent,
    RightSidebarComponent,
    LeftSideBarComponent,
    FooterComponent
  ],
  imports: [
    
    CommonModule
  ],
  exports: [
    PreLoaderComponent,
    HeaderComponent,
    RightSidebarComponent,
    LeftSideBarComponent,
    FooterComponent,
    CommonModule
  ]
})
export class SharedModule { }
export const sharedModuleComponents = [
  PreLoaderComponent,
  HeaderComponent,
  RightSidebarComponent,
  LeftSideBarComponent,
  FooterComponent,
  CommonModule
]