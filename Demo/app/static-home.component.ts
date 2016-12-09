import {Component, Input, Output, EventEmitter} from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, RouterOutlet, ROUTER_PROVIDERS , RouterLink, Router, RouteParams} from 'angular2/router';

@Component({

    selector : 'static-home',
    templateUrl : 'app/static-home.component.html',
    styleUrls : ['app/home/css/bootstrap.min.css','app/home/css/bootstrap.css',
                    'app/home/css/additional.css', 'app/home/css/material-dashboard.css'],
    directives: [ROUTER_DIRECTIVES, RouterOutlet],
    providers : [ROUTER_PROVIDERS]

})

export class StaticHomeComponent{
@Input() loggedIn;

@Output() status = new EventEmitter();
    constructor(private router: Router) {
    }


    onSubmit() {
        console.log("Emitting event");
        this.loggedIn = true;
        //this.status.emit({newValue : this.loggedIn});
        this.status._next({newValue : this.loggedIn});
       // console.log("Emitting event after");
       // console.log(this.status);

       


    }

}