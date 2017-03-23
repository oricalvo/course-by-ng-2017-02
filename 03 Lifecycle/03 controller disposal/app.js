var myApp = angular.module("myApp", []);

function HomeCtrl($scope, $parse) {
    $scope.run = function() {
        console.log("xxx");

        var fn = $parse("num1 + num2 + x");
        var res = fn({
            num1:2,
            num2:3,
        }, {
            num1: 0,
            num2: 0,
            x: 12
        });

        console.log(res);
    }
}

myApp.controller("HomeCtrl", HomeCtrl);