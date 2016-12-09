System.register(['angular2/core', './user-search.component'], function(exports_1, context_1) {
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
    var core_1, user_search_component_1;
    var SellComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_search_component_1_1) {
                user_search_component_1 = user_search_component_1_1;
            }],
        execute: function() {
            SellComponent = (function () {
                function SellComponent() {
                }
                SellComponent = __decorate([
                    core_1.Component({
                        selector: 'sell',
                        template: "\n     <user-search></user-search>\n        <h5> Sell things at a higher value </h5>\n    ",
                        directives: [user_search_component_1.UserSearchComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SellComponent);
                return SellComponent;
            }());
            exports_1("SellComponent", SellComponent);
        }
    }
});
//# sourceMappingURL=sell.component.js.map