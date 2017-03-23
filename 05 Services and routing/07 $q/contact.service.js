class ContactService {
    constructor($q) {
        this.$q = $q;

        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"}
        ];
    }

    getAll() {
        var deferred = this.$q.defer();

        setTimeout(() => {
            deferred.resolve(this.contacts);
        }, 2500);

        return deferred.promise;
        //return this.$q.when(this.contacts);
    }

    getById(contactId) {
        var contact = this.contacts.find(c => c.id==contactId);
        if(!contact) {
            throw new Error("Contact with id " + contactId + " was not found");
        }

        return contact;
    }
}

appModule.service("contactService", ContactService);
