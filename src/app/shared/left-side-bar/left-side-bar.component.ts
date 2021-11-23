import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/core/classes/Nav';
@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {
  navItem : Array<Nav> = [
   
  ]
  constructor() { }

  ngOnInit(): void {

    this.navItem.push(
      {
        name : 'DashBoard',
        link : '#',
        subMenu : []
    },
      {
        name : 'Product',
        link : '#',
        subMenu : [{
          name : 'Create Product',
          link : 'create-product',
          subMenu : []
        },
        {
          name : 'List Product',
          link : 'list-product',
          subMenu : []
        
      }]
    },
      {
        name: "Orders",
        link: "#",
        subMenu: [
          {
            name: "List Orders",
            link: "list-orders",
            subMenu: []
          }
        ]
      },
      {
        name: "Categories",
        link: "#",
        subMenu : [{
          name : 'Create',
          link : '#',
          subMenu : []
        },
        {
          name : 'View',
          link : '#',
          subMenu : []
        }]
      },
      {
        name: "User management",
        link: "user-management",
        subMenu : [{
          name : 'Create user',
          link : 'create-user',
          subMenu : []
        },
        {
          name : 'View user',
          link : 'view-user',
          subMenu : []
        }],
      },
      
    )
    }
    // this.navItem.push(
    //   {
    //     name : 'Home',
    //     link : 'Javascript',
    //     subMenu : [{
    //       name : 'Dashboard style 1',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Dashboard style 2',
    //       link : 'Javascript',
    //       subMenu : []
    //     }
    //   ]
    // },
    //   {
    //     name : 'Forms',
    //     link : 'Javascript',
    //     subMenu : [{
    //       name : 'Form Basic',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Advance Components',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Form Wizard',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Html 5 Editor',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Form Pickers',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Image Cropper',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Image Dropzone',
    //       link : 'Javascript',
    //       subMenu : []
    //     }
    //   ]
    //   },
    //   {
    //     name: "Tables",
    //     link: "#",
    //     subMenu: [
    //       {
    //         name: "Basic Tables",
    //         link: "#",
    //         subMenu: []
    //       },
    //       {
    //         name: "DataTables",
    //         link: "#",
    //         subMenu: []
    //       }
    //     ]
    //   },
    //   {
    //     name: "Calendar",
    //     link: "#",
    //     subMenu: []
    //   },
    //   {
    //     name: "UI Elements",
    //     link: "#",
    //     subMenu : [{
    //       name : 'Buttons',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Cards',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Card Hover',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Modals',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Tabs',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Tooltip & Popovers',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Sweet Alert',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Notification',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Timeline',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'ProgressBar',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Typography',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'List group',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Range slider',
    //       link : 'Javascript',
    //       subMenu : []
    //     },
    //     {
    //       name : 'Carousel',
    //       link : 'Javascript',
    //       subMenu : []
    //     }
    //   ]
    //   }
    // )
  //}

}