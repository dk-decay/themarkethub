System.register(['angular2/core', 'angular2/router', './user-search.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_search_component_1;
    var UserHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_search_component_1_1) {
                user_search_component_1 = user_search_component_1_1;
            }],
        execute: function() {
            UserHomeComponent = class UserHomeComponent {
                // }
                ngOnInit() {
                    if ($("body").hasClass('modal-open')) {
                        $("body.modal-open").toggleClass("modal-open");
                        $("div.modal-backdrop").toggleClass("modal-backdrop");
                        $("div.fade").toggleClass("fade");
                        $("div.in").toggleClass("in");
                    }
                    //  $("div").last().remove();
                    //Class("modal-backdrop fade in").addClass("modal-backdrop fade");
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], UserHomeComponent.prototype, "username", void 0);
            UserHomeComponent = __decorate([
                core_1.Component({
                    selector: 'user-home',
                    templateUrl: 'app/userhome.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES, user_search_component_1.UserSearchComponent],
                    styleUrls: ['app/home/css/bootstrap.min.css', 'app/home/css/bootstrap.css',
                        'app/home/css/additional.css', 'app/home/css/material-dashboard.css'],
                }), 
                __metadata('design:paramtypes', [])
            ], UserHomeComponent);
            exports_1("UserHomeComponent", UserHomeComponent);
        }
    }
});
//# sourceMappingURL=userhome.component.js.map