class HomeController {
    constructor($state, contactService) {
        this.$state = $state;

        this.contacts = contactService.getAll();
    }

    gotoAbout() {
        this.$state.go("about");
    }

    gotoContactDetails(contact) {
        this.$state.go("contact", {id: contact.id});
    }
}

appModule.component("myHome", {
    templateUrl: "home.component.html",
    controller: HomeController,
});
