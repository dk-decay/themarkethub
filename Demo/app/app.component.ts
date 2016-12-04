/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig , RouterOutlet} from 'angular2/router';
import { HomeComponent } from './home.component';


@RouteConfig([
    {
       path: "/home", name: "Home", component: HomeComponent, useAsDefault: true,
    }
])
@Component({
    selector: 'my-app',
    template: `
        <h1>Welcome to the Marketplace hello</h1>
        <div class="container">
        <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
export class AppComponent {
    constructor() {
    }
}