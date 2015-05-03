angular.module("testModule")
    .controller("PasswordController", function () {
        var vm = this;
        vm.password = '';
        vm.strength = null;

        vm.grade = function () {
            var length = vm.password.length;
            if (length > 8) {
                vm.strength = 'strong';
            } else if (length <=8 && length >= 4) {
                vm.strength = 'middle';
            } else {
                vm.strength = 'weak';
            }

        };
    });
