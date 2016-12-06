import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig , RouterOutlet} from 'angular2/router';
import { BuyComponent } from './buy.component';
import { SellComponent } from './sell.component';


@Component({

    selector : 'user-home',
    template : `
    
    <a [routerLink]="['Buy']">Buy</a>
    <a [routerLink]="['Sell']">Sell</a>
    
    
    `,
    directives : [ROUTER_DIRECTIVES]
})
export class UserHomeComponent {

    
}