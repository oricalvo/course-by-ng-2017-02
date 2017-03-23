var appModule = angular.module("myApp", []);

appModule.config(function($provide) {
    $provide.factory("di", function($injector) {
        console.log("Creating DI");

        return {
            register: function (name, service) {
                $provide.service(name, service);
            },

            resolve: function (name) {
                return $injector.get(name);
            }
        };
    });
});

appModule.controller("HomeCtrl", function($scope, $injector, di) {
    $scope.load = function() {
        //
        //  Register new service
        //
        di.register("xxx", function() {
        });

        // appModule.service("xxx", function() {
        // });

        //
        //  Get the service
        //
        di.resolve("xxx");

        console.log("OK");
    }
});
