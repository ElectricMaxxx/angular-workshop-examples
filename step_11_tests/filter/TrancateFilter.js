angular.module("testModule")
    .filter("truncate", function () {
        return function(input, length) {
            length = length || 4;

            if (input.length > length) {
                return input.substr(0, length);
            }
            return input;
        }
    });
