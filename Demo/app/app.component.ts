/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, RouterOutlet, ROUTER_PROVIDERS , RouterLink, Router, RouteParams} from 'angular2/router';
import { HomeComponent } from './home.component';
import { UserBodyComponent } from './user-body.component';
import { UserHeaderComponent } from './user-header.component';
import { BuyComponent } from './buy.component';
import { SellComponent } from './sell.component';
import { UserHomeComponent } from './userhome.component';


@RouteConfig([


    // {path: "/home", name: 'Home', component: HomeComponent, useAsDefault: true}
    // {path: "/home", name: 'Home', component: HomeComponent, useAsDefault: true},
    // {path: "/user-body", name: 'UserBody', component: UserBodyComponent, useAsDefault: true},
    //{path: "/buy", name: 'Buy', component: BuyComponent, useAsDefault: true},

    //{ path: "/home", name: 'Home', component: HomeComponent },
    { path: "/userhome", name: 'UserHome', component: UserHomeComponent },
    { path: "/buy", name: 'Buy', component: BuyComponent },
    { path: "/sell", name: 'Sell', component: SellComponent }
])
@Component({
    selector: 'my-app',
    // template: `
    //      <div *ngIf="!loggedIn">


    //      </div>
    //     <user-nav-head></user-nav-head>

    //     <user-home *ngIf="loggedIn"></user-home>
    //     <div class="container">
    //     <router-outlet></router-outlet>        
    //     </div>



    // `,
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, RouterOutlet, UserHomeComponent],
    providers : [ROUTER_PROVIDERS]
})
export class AppComponent {
    loggedIn = false;
    constructor(private router: Router) {
    }


    onSubmit() {

        this.loggedIn = true;
        this.router.navigate(['Buy']);


    }
}