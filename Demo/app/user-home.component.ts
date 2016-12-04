import { Component } from 'angular2/core';
import { UserHeaderComponent } from './user-header.component';
import { UserBodyComponent } from './user-body.component';


@Component({

    selector : 'user-home',
    template : `
    
        <user-header></user-header>
        <user-body></user-body>
    `,
    directives:[UserHeaderComponent, UserBodyComponent]
})

export class UserHomeComponent{

}