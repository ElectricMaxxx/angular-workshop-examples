angular.module("testModule")
    .directive("obiDirective", function () {
        return {
            restrict: "E",
            replace: true,
            template: "<h1>Test a directive</h1>"
        }
    });
