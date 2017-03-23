class ContactService {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"}
        ];
    }

    getAll() {
        return this.contacts;
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
