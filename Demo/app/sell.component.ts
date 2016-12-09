import { Component } from 'angular2/core';
import {UserSearchComponent} from './user-search.component'

@Component({
    selector : 'sell',
    template : `
     <user-search></user-search>
        <h5> Sell things at a higher value </h5>
    `,
    directives: [UserSearchComponent]
})

export class SellComponent{
    
}