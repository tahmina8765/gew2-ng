(function () {
    var app = angular.module('StudentApp');
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'view/pages/home.html',
                    })
                    .when('/students', {
                        templateUrl: 'view/students/list.html',
                        controller: 'ListController'
                    })
                    .when('/students/new', {
                        templateUrl: 'view/students/form.html',
                        controller: 'NewStudentController',
                    })
                    .when('/students/edit/:index', {
                        templateUrl: 'view/students/form.html',
                        controller: 'NewStudentController',
                    })
                    .otherwise({
                        redirectTo: '/'
                    })
                    ;

        }]);
})();

