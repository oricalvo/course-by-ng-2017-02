class AppController {
    constructor() {
    }

    stopClock1() {
        this.clock1.stop();
    }
}

appModule.component("idiApp", {
    controller: [
        AppController
    ],
    templateUrl: "app.component.html",
});
