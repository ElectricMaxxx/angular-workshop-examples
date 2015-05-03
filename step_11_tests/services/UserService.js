angular.module("testModule")
    .service("UserService", function () {
        var url = '',
            name = 'Max',
            service = this;

        service.setUrl = function (value) {
            url = value;
        };

        service.createObject = function () {
            return {
                name: name,
                url: url
            };
        };

        return service;
    });
