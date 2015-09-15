(function () {
    var app = angular.module('App', ['ui.router', 'ngResource']);

    app.constant('RestAPI', {
        'URL': 'http://localhost:8888'
    });

    app.config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode(true);
        }]);
    app.config(function ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('Home', {
                    url: '/',
                    controller: 'PagesController',
                    templateUrl: '/components/Pages/home.html'
                })
                ;
        ;
    });
})();
