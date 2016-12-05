System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var UserHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserHeaderComponent = (function () {
                function UserHeaderComponent() {
                }
                UserHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'user-header',
                        template: "\n        <nav class=\"navbar navbar-default navbar-fixed-top\">\n             <div class=\"container-fluid\">\n                 <div class=\"navbar-header\">\n                     <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                         <span class=\"icon-bar\"></span>\n                         <span class=\"icon-bar\"></span>\n                         <span class=\"icon-bar\"></span>\n                     </button>\n                 </div> \n                <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                   <ul class=\"nav navbar-nav\">\n                   <li class=\"active\"><a href=\"#\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\n                   <li><a href=\"#\">About Us</a></li>\n                   <li><a href=\"#\">Contact</a></li>\n                </ul>\n             </div>\n        </div>\n    </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserHeaderComponent);
                return UserHeaderComponent;
            }());
            exports_1("UserHeaderComponent", UserHeaderComponent);
        }
    }
});
//# sourceMappingURL=user-header.component.js.map