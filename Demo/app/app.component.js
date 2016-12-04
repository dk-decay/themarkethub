/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', './user-body.component', './user-header.component', './buy.component', './sell.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_body_component_1, user_header_component_1, buy_component_1, sell_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_body_component_1_1) {
                user_body_component_1 = user_body_component_1_1;
            },
            function (user_header_component_1_1) {
                user_header_component_1 = user_header_component_1_1;
            },
            function (buy_component_1_1) {
                buy_component_1 = buy_component_1_1;
            },
            function (sell_component_1_1) {
                sell_component_1 = sell_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        // {path: "/home", name: 'Home', component: HomeComponent, useAsDefault: true},
                        // {path: "/user-body", name: 'UserBody', component: UserBodyComponent, useAsDefault: true},
                        { path: "/buy", name: 'Buy', component: buy_component_1.BuyComponent, useAsDefault: true },
                        { path: "/sell", name: 'Sell', component: sell_component_1.SellComponent }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <user-body></user-body>\n\n        <div class=\"container\">\n        <router-outlet></router-outlet>        \n        </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet, user_header_component_1.UserHeaderComponent, user_body_component_1.UserBodyComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map