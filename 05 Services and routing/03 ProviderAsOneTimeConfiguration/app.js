var appModule = angular.module("myApp", []);

appModule.config(function(xxxProvider) {
    console.log("config", xxxProvider);
});

appModule.run(function(config) {
    //console.log("config", xxxProvider);

    config.loadFromServer();
});

appModule.provider("xxx", function() {
    this.$get = function() {
        console.log("Creating xxx");

        return {
            name: "Roni",
        };
    }
});

appModule.controller("HomeCtrl", function($scope, xxx) {
    $scope.value = xxx.name;
});
