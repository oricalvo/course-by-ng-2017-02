var appModule = angular.module("myApp", ["ui.router"]);

appModule.config(function($stateProvider) {
    $stateProvider
        .state({
            name: 'home',
            url: '/home',
            template: '<my-home></my-home>'
        })
        .state({
            name: 'contact',
            url: '/contact/:id',
            template: '<my-contact-details></my-contact-details>'
        })
        .state({
            name: 'about',
            url: '/about',
            template: '<h1>About</h1>'
        });
});
