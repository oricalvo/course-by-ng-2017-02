(function() {
    "use strict";

    class ContactListCtrl {
        constructor($http, $scope, $attrs) {
            console.log("parent", $scope.$parent.$ctrl);
            $scope.$parent.$ctrl[$attrs.name] = this;

        }

        $onInit() {
        }

        $onChanges() {
            console.log("$onChanges", this.contacts);

            if(!this.contacts) {
                this.contactsVM = [];
                return;
            }

            this.contactsVM = this.contacts.map(contact => {
                return {
                    id: contact.id,
                    name: contact.name,
                    selected: false,
                };
            });
        }

        select(contact) {
            if(this.lastSelected) {
                this.lastSelected.selected = false;
            }

            contact.selected = !contact.selected;

            if(contact.selected) {
                this.lastSelected = contact;
            }
            else {
                this.lastSelected = null;
            }

            this.onSelectionChanged({
                $event: {
                    contact: this.lastSelected,
                }
            });
        }
    }

    angular.module("myApp").component("myContactList", {
        controller: ContactListCtrl,
        templateUrl: "contactList/contactList.html",
        bindings: {
            contacts: "<",
            onSelectionChanged: "&",
        }
    });
})();
