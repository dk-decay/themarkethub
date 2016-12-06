/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', './buy.component', './sell.component', './userhome.component'], function(exports_1, context_1) {
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
    var core_1, router_1, buy_component_1, sell_component_1, userhome_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (buy_component_1_1) {
                buy_component_1 = buy_component_1_1;
            },
            function (sell_component_1_1) {
                sell_component_1 = sell_component_1_1;
            },
            function (userhome_component_1_1) {
                userhome_component_1 = userhome_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.loggedIn = false;
                }
                AppComponent.prototype.onSubmit = function () {
                    this.loggedIn = true;
                    this.router.navigate(['Buy']);
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        // {path: "/home", name: 'Home', component: HomeComponent, useAsDefault: true}
                        // {path: "/home", name: 'Home', component: HomeComponent, useAsDefault: true},
                        // {path: "/user-body", name: 'UserBody', component: UserBodyComponent, useAsDefault: true},
                        //{path: "/buy", name: 'Buy', component: BuyComponent, useAsDefault: true},
                        //{ path: "/home", name: 'Home', component: HomeComponent },
                        { path: "/userhome", name: 'UserHome', component: userhome_component_1.UserHomeComponent },
                        { path: "/buy", name: 'Buy', component: buy_component_1.BuyComponent },
                        { path: "/sell", name: 'Sell', component: sell_component_1.SellComponent }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        // template: `
                        //      <div *ngIf="!loggedIn">
                        //      </div>
                        //     <user-nav-head></user-nav-head>
                        //     <user-home *ngIf="loggedIn"></user-home>
                        //     <div class="container">
                        //     <router-outlet></router-outlet>        
                        //     </div>
                        // `,
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet, userhome_component_1.UserHomeComponent],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map