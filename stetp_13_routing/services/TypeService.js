angular.module("myModule")
    .service("TypeService", ["Restangular", function (Restangular) {
        var TypeService = this,
            types = [],
            TypeResource = Restangular.service('types');

        TypeService.getAllTypes = function () {

            return TypeResource.getList().then(function (typesJson) {
                _.forEach(typesJson, function(typeJson) {
                    updateTypes(typeJson);
                });

                return types;
            });
        };

        function updateTypes (type) {
            var index = _.findIndex(types, function (listType) {
                return listType.id === type.id;
            });

            if (-1 === index) {
                types.push(type);
            }
        }

        TypeService.getTypeById = function (id) {
            var type =_.find(types, function (type) {
                            return type['id'] === id;
                        });

            if (type) {
                return type;
            }

            return null;
        };

        TypeService.save = function (type) {
            if (null === type.id) {
                type.id = types.length + 100;
                types.push(type);
                return;
            }

            var index = _.findIndex(types, function (listType) {
                return listType.id === type.id;
            });

            if (-1 !== index) {
                types[index] = type;
            }
        };

        TypeService.remove = function (type) {
            var index = _.findIndex(types, function (listType) {
                return listType.id === type.id;
            });

            if (-1 !== index) {
                types.splice(index, 1);
            }
        };

        return TypeService;
    }]);
