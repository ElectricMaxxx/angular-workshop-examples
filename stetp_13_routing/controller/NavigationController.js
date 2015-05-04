angular.module('myModule')
    .controller('NavigationController', function ($scope, NAV_ITEMS) {
        'use strict';

        $scope.navItems = NAV_ITEMS;
    });
