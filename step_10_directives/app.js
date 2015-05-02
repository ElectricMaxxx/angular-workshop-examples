angular.module("myModule", ['restangular', 'ngDraggable'])
    .config([
        "RestangularProvider", function(RestangularProvider) {
            RestangularProvider.setRequestSuffix('.json');
            return RestangularProvider.setBaseUrl("/ExampleApp/step_08_backend/api/v1/");
        }]);
