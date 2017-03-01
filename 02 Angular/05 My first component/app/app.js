(function() {
    "use strict";

    class AppCtrl {
        constructor($http) {
            $http.get("contacts.json").then(res => {
                this.contacts = res.data;
            });
        }

        $onInit() {
            console.log("contactsList", this.contactList1);
        }

        add() {
            if (!this.newName) {
                return;
            }

            var contact = {id: -1, name: this.newName};
            this.contacts = this.contacts.concat([contact]);
        }

        deleteSelected() {
            console.log(this.contacts);

            for (var i = 0; i < this.contacts.length; i++) {
                var contact = this.contacts[i];

                if (contact.selected) {
                    this.contacts.splice(i, 1);
                    i--;
                }
            }
        }

        onSelectionChanged($event) {
            this.selectedContact = $event.contact;
        }
    }

    angular.module("myApp").component("myApp", {
        controller: AppCtrl,
        templateUrl: "app/app.html",
    });
})();
