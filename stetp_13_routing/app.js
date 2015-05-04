angular.module("myModule", ['restangular', 'ngDraggable', 'ui.router'])
    .config(["RestangularProvider", "$stateProvider", function(RestangularProvider, $stateProvider) {
            RestangularProvider.setRequestSuffix('.json');
            return RestangularProvider.setBaseUrl("/ExampleApp/step_08_backend/api/v1/");
    }])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/type');
        $stateProvider
            .state('type', {
                url: '/type',
                views: {
                    "type-view": {templateUrl: 'views/type_home.tpl.html', controller: 'TypeController as typeController'}
                }
            })
            .state('map', {
                url: '/map',
                views: {
                    "type-view": {templateUrl: 'views/type_map_home.tpl.html', controller: 'TypeController as typeController'}
                }
            })
    }])
    .constant('NAV_ITEMS', [
        {title: 'Types', state: 'type', sref: 'type', icon: 'glyphicon-home'},
        {title: 'TypeMap-Mangement', state: 'map', sref: 'map', icon: 'glyphicon-home'}
    ]);
