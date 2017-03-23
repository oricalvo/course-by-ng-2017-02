class AppController {
    constructor() {
        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"}
        ];
    }

    add() {
        this.contacts.push({
            id: -1,
            name: this.name
        });
    }

    remove(index) {
        this.contacts.splice(index, 1);
    }

    refresh() {
        this.contacts = this.contacts.concat([]);
        this.contacts[0] = Object.assign({}, this.contacts[0], {
            name: "XXX",
        });

        //this.contacts[0].name = "XXX";

        // this.contacts = [
        //     {id: 1, name: "Beni"},
        //     {id: 2, name: "Udi"}
        // ];
    }
}

appModule.component("myApp", {
    controller: AppController,
    templateUrl: "app/app.component.html",
});
