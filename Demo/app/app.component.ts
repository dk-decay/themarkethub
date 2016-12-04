/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig , RouterOutlet} from 'angular2/router';
import { HomeComponent } from './home.component';
import { UserBodyComponent } from './user-body.component';
import { UserHeaderComponent } from './user-header.component';
import { BuyComponent } from './buy.component';
import { SellComponent } from './sell.component';


@RouteConfig([
    
     // {path: "/home", name: 'Home', component: HomeComponent, useAsDefault: true},
     // {path: "/user-body", name: 'UserBody', component: UserBodyComponent, useAsDefault: true},
      {path: "/buy", name: 'Buy', component: BuyComponent, useAsDefault: true},
      {path: "/sell", name: 'Sell', component: SellComponent}

])
@Component({
    selector: 'my-app',
    template: `
        <user-body></user-body>

        <div class="container">
        <router-outlet></router-outlet>        
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, RouterOutlet, UserHeaderComponent, UserBodyComponent]
})
export class AppComponent {
    constructor() {
    }
}