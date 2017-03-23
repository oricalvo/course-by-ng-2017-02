ClockController.$inject = [
    "$interval",
    "$attrs",
    "$scope",
    "$http"
];

class ClockController {
    constructor($interval, $attrs, $scope, $http) {
        if($attrs.name) {
            $scope.$parent.$ctrl[$attrs.name] = this;
        }

        this.time = new Date();
        this.$interval = $interval;

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

        this.intervalId = this.$interval(()=> {
            this.time = new Date();
        }, 1000);
    }
}

appModule.component("idiClock", {
    controller: ClockController,
    templateUrl: "clock.component.html",
    bindings: {
    }
});
