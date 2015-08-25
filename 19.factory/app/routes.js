(function () {
    var app = angular.module('StudentApp');
    app.config(function ($stateProvider) {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: 'view/pages/home.html'
        }).state('Students', {
            url: '/students',
            templateUrl: 'view/students/list.html',
        }).state('NewStudents', {
            url: '/students/new',
            templateUrl: 'view/students/form.html',
            controller: 'NewStudentController'
        }).state('EditStudents', {
            url: '/students/edit/:index',
            templateUrl: 'view/students/form.html',
            controller: 'NewStudentController'
        });
    }).run(function ($state) {
        $state.go('Home');
    });
//    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//            $routeProvider
//                    .when('/', {
//                        templateUrl: 'view/pages/home.html',
//                    })
//                    .when('/students', {
//                        templateUrl: 'view/students/list.html',
//                    })
//                    .when('/students/new', {
//                        templateUrl: 'view/students/form.html',
//                        controller: 'NewStudentController',
//                    })
//                    .when('/students/edit/:index', {
//                        templateUrl: 'view/students/form.html',
//                        controller: 'NewStudentController',
//                    })
//                    .otherwise({
//                        redirectTo: '/'
//                    })
//                    ;
//
//        }]);
})();

