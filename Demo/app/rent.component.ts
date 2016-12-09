import { Component } from 'angular2/core';
import {UserSearchComponent} from './user-search.component'

@Component({
    selector : 'rent',
    template : `
    <user-search></user-search>
        <h5> Rent things from here </h5>
    `,
    directives: [UserSearchComponent]
})

export class RentComponent{
    
}