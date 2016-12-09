import {Component, OnInit} from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig , RouterOutlet} from 'angular2/router';
import {UserSearchComponent} from './user-search.component'

@Component({

    selector : 'user-home',
    templateUrl : 'app/userhome.component.html',
    directives : [ROUTER_DIRECTIVES, UserSearchComponent],
    styleUrls : ['app/home/css/bootstrap.min.css','app/home/css/bootstrap.css',
                    'app/home/css/additional.css', 'app/home/css/material-dashboard.css'],
})
export class UserHomeComponent implements OnInit {

ngOnInit()
{
        if($("body").hasClass('modal-open')){
        $("body.modal-open").toggleClass("modal-open");
        $("div.modal-backdrop").toggleClass("modal-backdrop");
        $("div.fade").toggleClass("fade");
        $("div.in").toggleClass("in");
        }
      //  $("div").last().remove();
        //Class("modal-backdrop fade in").addClass("modal-backdrop fade");

}
    
}