import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig , RouterOutlet} from 'angular2/router';

@Component({

    selector : 'user-search',
    templateUrl : 'app/user-search.component.html',
    directives : [ROUTER_DIRECTIVES],
    styleUrls : ['app/home/css/bootstrap.min.css','app/home/css/bootstrap.css',
                    'app/home/css/additional.css', 'app/home/css/material-dashboard.css'],
})
export class UserSearchComponent {

    
}