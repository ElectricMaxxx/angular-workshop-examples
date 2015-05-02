angular.module("myModule")
    .directive('typeMap', function () {
        return {
            restrict: "E",
            scope: {
                types: "="
            },
            templateUrl: "views/type_map.tpl.html",
            link: function (scope, element, attrs) {

            },
            controller: function ($scope) {
                $scope.droppedTypes = [];
                $scope.onDragComplete=function(data, evt){
                    console.log("drag success, data:", data);
                }
                $scope.onDropComplete=function(data, evt){
                    var type = _.clone(data);
                    var id = $scope.droppedTypes.length > 0 ? ($scope.droppedTypes.length+1) : type.id;
                    type.id = id;
                    $scope.droppedTypes.push(type);
                    console.log("drop success, data:", data);
                }
            }
        }
    });
