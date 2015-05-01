angular.module("myModule")
    .service("TypeService", [function () {
        var TypeService = this,
            types = [
                {id: 1, name: "Palete", size: "standard"},
                {id: 2, name: "Seitenabhang", size: "standard"},
            ];

        TypeService.getAllTypes = function () {
            return types;
        };

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
