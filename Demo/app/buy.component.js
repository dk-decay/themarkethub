System.register(['angular2/core', './products', './products.service', './user-search.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, products_1, products_service_1, user_search_component_1;
    var BuyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (products_1_1) {
                products_1 = products_1_1;
            },
            function (products_service_1_1) {
                products_service_1 = products_service_1_1;
            },
            function (user_search_component_1_1) {
                user_search_component_1 = user_search_component_1_1;
            }],
        execute: function() {
            BuyComponent = (function () {
                function BuyComponent(_productService) {
                    this._productService = _productService;
                }
                BuyComponent.prototype.ngOnInit = function () {
                    this.products = this._productService.getProducts();
                    //  .subscribe(response => {
                    //      this._productObj = response
                    //    });
                };
                BuyComponent = __decorate([
                    core_1.Component({
                        selector: 'buy',
                        templateUrl: 'app/buy.component.html',
                        providers: [products_1.Products, products_service_1.ProductsService],
                        directives: [user_search_component_1.UserSearchComponent]
                    }), 
                    __metadata('design:paramtypes', [products_service_1.ProductsService])
                ], BuyComponent);
                return BuyComponent;
            }());
            exports_1("BuyComponent", BuyComponent);
        }
    }
});
//# sourceMappingURL=buy.component.js.map