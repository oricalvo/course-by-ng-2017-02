(function() {
    "use strict";

    class HomeCtrl {
        constructor($http) {
            $http.get("contacts.json").then((response) => {
                var contacts = response.data;
                console.log(contacts);

                this.contacts = contacts;
            });
        }

        add() {
            if (!this.newName) {
                return;
            }

            var contact = {id: -1, name: this.newName};
            this.contacts.push(contact);
        }

        deleteSelected() {
            for (var i = 0; i < this.contacts.length; i++) {
                var contact = this.contacts[i];

                if (contact.selected) {
                    this.contacts.splice(i, 1);
                    i--;
                }
            }
        }
    }

    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
