System.register(['rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subject_1;
    var QueueService;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            QueueService = (function () {
                function QueueService() {
                    this.parentQueue = new Subject_1.Subject();
                    this.childQueue = new Subject_1.Subject();
                    this.parentQOb$ = this.parentQueue.asObservable();
                    this.childQOb$ = this.childQueue.asObservable();
                }
                QueueService.prototype.sendParent = function (str) {
                    this.parentQueue.next(str);
                };
                QueueService.prototype.sendChild = function (str) {
                    this.childQueue.next(str);
                };
                return QueueService;
            }());
            exports_1("QueueService", QueueService);
        }
    }
});
//# sourceMappingURL=queue.service.js.map