angular.module("testModule")
    .service("UserService", ['truncate', function (truncate) {
        var url = '',
            description = '',
            name = 'Max',
            service = this;

        service.setUrl = function (value) {
            url = value;
        };

        service.setDescription = function (value) {
            description = truncate(value, 10);
        };

        service.createObject = function () {
            return {
                name: name,
                url: url,
                description: description
            };
        };

        return service;
    }]);
