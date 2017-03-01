var appModule = angular.module("myApp", [
]);

function HomeCtrl($scope) {
    $scope.counter = 42;

    $scope.inc = function() {
        ++$scope.counter;
    }

    $scope.sayHello = function() {
        alert("Hello " + $scope.name);
    }

    $scope.reset = function() {
        $scope.name = "";
    }
}

appModule.controller("HomeCtrl", HomeCtrl);
