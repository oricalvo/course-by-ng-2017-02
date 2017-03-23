class AppController {
    constructor() {
        this.counter = 0;

        setInterval(()=> {
            this.counter++;
        }, 1000);
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
