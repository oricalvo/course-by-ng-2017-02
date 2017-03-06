class HomeController {
    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }

    add() {
        if(!this.name) {
            return;
        }

        const contact = {
            id: -1,
            name: this.name,
        };

        this.contacts.push(contact);
    }
}

appModule.component("myHome", {
    controller: HomeController,
    templateUrl: "home.component.html",
});
