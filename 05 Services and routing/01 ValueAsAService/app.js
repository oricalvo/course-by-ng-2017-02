var appModule = angular.module("myApp", []);

appModule.value("xxx", {
    id: 123,
    name: "Ori",
});

appModule.controller("HomeCtrl", function($scope, xxx) {
    $scope.value = xxx.name;
});
