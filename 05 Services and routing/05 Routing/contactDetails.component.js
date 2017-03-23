class ContactDetailsController {
    constructor($stateParams, contactService) {
        var contactId = $stateParams.id;
        if(!contactId) {
            throw new Error("Missing route parameter id");
        }

        this.contact = contactService.getById(contactId);
    }
}

appModule.component("myContactDetails", {
    templateUrl: "contactDetails.component.html",
    controller: ContactDetailsController,
});
