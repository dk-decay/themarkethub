import { Component } from 'angular2/core';
import { UserSearchComponent } from './user-search.component';
import { FooterComponent } from './footer.component'

@Component({
    selector : 'dashboard',
    templateUrl : 'app/dashboard.component.html',
    styleUrls : ['app/home/css/bootstrap.min.css','app/home/css/bootstrap.css',
                    'app/home/css/additional.css', 'app/home/css/material-dashboard.css'],
    directives: [UserSearchComponent, FooterComponent]
})

export class DashboardComponent{
    
}