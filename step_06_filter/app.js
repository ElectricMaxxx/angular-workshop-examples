angular
    .module('app', [])
    .controller('MyCtrl', MyCtrl)
    .filter('truncate', truncate);

function truncate() {
    return function(input, length) {
        length = length || 4;

        if (input.length > length) {
            return input.substr(0, length);
        }
        return input;
    }
}

MyCtrl.$inject = ['truncateFilter', 'uppercaseFilter'];
function MyCtrl(truncate, uppercase) {
    var vm = this;
    vm.tinyAnimal = uppercase(truncate('Mouse', 3));

    vm.searchTerm = '';
    vm.animals = ['cow', 'pig', 'chicken'];
    vm.addElephant = addElephant;

    function addElephant() {
        vm.animals.push('Elephant');
    }
}