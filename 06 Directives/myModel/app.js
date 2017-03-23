var appModule = angular.module("myApp", []);

appModule.controller("HomeCtrl", function($scope) {
    $scope.counter = 0;

    $scope.inc = function() {
        ++$scope.counter;
    }

    $scope.log = function() {
        console.log($scope.counter);
    }
});

appModule.directive("myModel", function($http, $q, $rootScope, $compile) {
    return {
        compile: function(element, attrs) {
            console.log("compile", element, attrs);

            return function link(scope, element, attrs) {

                element.on("input", function() {
                    var val = element.val();

                    console.log("DOM change", val);

                    scope[attrs.myModel] = val;

                    scope.$apply();
                });

                scope.$watch(attrs.myModel, function(newValue) {
                    console.log("DATA change", newValue);

                    element.val(newValue);
                });

                console.log("link", element, attrs);
            }
        }
    };
});
