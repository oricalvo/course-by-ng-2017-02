(function() {
    "use strict";

    function HomeCtrl($scope, $http) {

        $http.get("contacts.json").then(function(response) {
            var contacts = response.data;
            console.log(contacts);

            $scope.contacts = contacts;
        });

        $scope.remove = function(contact, index) {
            if(confirm("Delete contact " + contact.name + " ?")) {
                $scope.contacts.splice(index, 1);
            }
        }

        $scope.add = function() {
            if(!$scope.newName) {
                return;
            }

            var contact = {id:-1, name: $scope.newName};
            $scope.contacts.push(contact);
        }

        $scope.deleteSelected = function() {
            for(var i=0; i<$scope.contacts.length; i++) {
                var contact = $scope.contacts[i];

                if(contact.selected) {
                    $scope.contacts.splice(i, 1);
                    i--;
                }
            }
        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
