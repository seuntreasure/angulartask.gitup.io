import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/core/classes/Nav';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {
  navItem: Array<Nav> = [];
  constructor() { }

  ngOnInit(): void {
    this.navItem.push(

      {
        name: 'Dashboard',
        link: 'dashboard',
        subMenu: []
      },
      {
        name: 'Product',
        link: 'javascript:;',
        subMenu: [{
            name: 'create product',
            link: 'product/create-product',
            subMenu: []
        },
        {
            name: 'list products',
            link: 'product/list-product',
            subMenu: []
        }]
      },
      {
        name: 'Orders',
        link: 'javascript:;',
        subMenu: [
          {
            name: 'List-Orders',
            link: 'orders/list-orders',
            subMenu: []
          }
        ]
      },
      {
          name: 'Categories',
          link: 'javascript:;',
          subMenu: [
            {
            name: 'create',
            link: 'categories/create',
            subMenu: []
          },
          {
            name: 'view',
            link: 'categories/view',
            subMenu: []
          }
        ]
      },
      {
        name: 'User management',
          link: 'javascript:;',
          subMenu: [
            {
            name: 'create',
            link: 'user-management/create',
            subMenu: []
          },
          {
            name: 'view',
            link: 'user-management/view',
            subMenu: []
          }
        ]
      },
    )
  }

  
  }

