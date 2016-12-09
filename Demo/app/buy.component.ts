import { Component, OnInit } from 'angular2/core';
import { Products } from './products';
import { ProductsService } from './products.service';
import {UserSearchComponent} from './user-search.component'

@Component({
    selector : 'buy',
    templateUrl : 'app/buy.component.html',   
    providers: [Products, ProductsService],
    directives: [UserSearchComponent]
})

export class BuyComponent implements OnInit{

    private _productObj: Products[];
    current;
    images;
    products;

    constructor(private _productService: ProductsService) { }
    
    ngOnInit() {
      this.products = this._productService.getProducts()
          //  .subscribe(response => {
          //      this._productObj = response
        //    });

        


    }
}