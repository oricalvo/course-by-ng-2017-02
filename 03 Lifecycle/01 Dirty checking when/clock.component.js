class ClockController {
    constructor($interval, $attrs, $scope, $http) {
        if($attrs.name) {
            $scope.$parent.$ctrl[$attrs.name] = this;
        }

        this.time = new Date();
        this.$interval = $interval;
        this.$scope = $scope;

        this.start();
    }

    stop() {
        if(this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    }

    start() {
        this.time = new Date();

        this.intervalId = setInterval(()=> {
            this.time = new Date();

            this.$scope.$apply();
            //this.$scope.$digest();
        }, 1000);
    }
}

ClockController.$inject = [
    "$interval",
    "$attrs",
    "$scope",
    "$http"
];

appModule.component("idiClock", {
    controller: ClockController,
    templateUrl: "clock.component.html",
    bindings: {
    }
});
