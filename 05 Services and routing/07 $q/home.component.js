class HomeController {
    constructor($state, contactService) {
        this.$state = $state;

        this.loading = true;
        contactService.getAll().then(contacts => {
            this.contacts = contacts;
        }).finally(()=> {
            this.loading = false;
        });
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
