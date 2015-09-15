(function () {

    var app = angular.module('App');
    app.config(function ($stateProvider, $httpProvider) {
        $stateProvider.state('Students', {
            url: '/students',
            templateUrl: 'components/students/views/index.html',
            controller: 'StudentsListController'
        }).state('ViewStudents', {
            url: '/students/view/:id',
            templateUrl: 'components/students/views/view.html',
            controller: 'StudentsViewController'
        }).state('NewStudents', {
            url: '/students/new',
            templateUrl: 'components/students/views/add.html',
            controller: 'StudentsCreateController'
        }).state('EditStudents', {
            url: '/students/edit/:id',
            templateUrl: 'components/students/views/edit.html',
            controller: 'StudentsEditController'
        });
    });
})();
