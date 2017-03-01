(function() {
    "use strict";

    function HomeCtrl($http) {
        $http.get("contacts.json").then((response) => {
            var contacts = response.data;
            console.log(contacts);

            this.contacts = contacts;
        });
    }

    HomeCtrl.prototype.remove = function(contact, index) {
        if(confirm("Delete contact " + contact.name + " ?")) {
            this.contacts.splice(index, 1);
        }
    }

    HomeCtrl.prototype.add = function() {
        if(!this.newName) {
            return;
        }

        var contact = {id:-1, name: this.newName};
        this.contacts.push(contact);
    }

    HomeCtrl.prototype.deleteSelected = function() {
        for(var i=0; i<this.contacts.length; i++) {
            var contact = this.contacts[i];

            if(contact.selected) {
                this.contacts.splice(i, 1);
                i--;
            }
        }
    }


    angular.module("myApp").controller("HomeCtrl", HomeCtrl);
})();
