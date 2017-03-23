class ContactDetailsController {
    constructor() {
        console.log("contactDetails.ctor");

        console.log("ctor", this.contact);
    }

    $onInit() {
        console.log("$onInit", this.contact);
    }

    $onChanges() {
        console.log("$onChanges", this.contact);

        this.fullName = this.contact.name + ":" + this.contact.id;
    }

    $onDestroy() {
        console.log("contactDetails.dtor");
    }
}

appModule.component("myContactDetails", {
    controller: ContactDetailsController,
    templateUrl: "app/contactDetails.component.html",
    bindings: {
        contact: "<",
    }
});
