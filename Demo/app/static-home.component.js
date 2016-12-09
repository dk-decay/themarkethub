System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var StaticHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StaticHomeComponent = (function () {
                function StaticHomeComponent(router) {
                    this.router = router;
                    this.status = new core_1.EventEmitter();
                }
                StaticHomeComponent.prototype.onSubmit = function () {
                    console.log("Emitting event");
                    this.loggedIn = true;
                    //this.status.emit({newValue : this.loggedIn});
                    this.status._next({ newValue: this.loggedIn });
                    // console.log("Emitting event after");
                    // console.log(this.status);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], StaticHomeComponent.prototype, "loggedIn", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StaticHomeComponent.prototype, "status", void 0);
                StaticHomeComponent = __decorate([
                    core_1.Component({
                        selector: 'static-home',
                        templateUrl: 'app/static-home.component.html',
                        styleUrls: ['app/home/css/bootstrap.min.css', 'app/home/css/bootstrap.css',
                            'app/home/css/additional.css', 'app/home/css/material-dashboard.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], StaticHomeComponent);
                return StaticHomeComponent;
            }());
            exports_1("StaticHomeComponent", StaticHomeComponent);
        }
    }
});
//# sourceMappingURL=static-home.component.js.map