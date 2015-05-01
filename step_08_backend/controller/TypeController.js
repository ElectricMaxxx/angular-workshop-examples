angular.module("myModule")
    .controller("TypeController", ["TypeService", function (TypeService) {
        var vm = this;
        vm.types = [];
        vm.currentType = {id: null, name: "", size: ""};

        vm.init = function () {
            vm.types = TypeService.getAllTypes();
        };

        vm.edit  = function (type) {
            vm.currentType = type;
        };

        vm.save = function (type) {
            TypeService.save(type);
            vm.currentType = {id: null, name: "", size: ""};
        };

        vm.remove = function (type) {
            TypeService.remove(type);
            vm.currentType = {id: null, name: "", size: ""};
            vm.init();
        };

        vm.init();
    }]);
