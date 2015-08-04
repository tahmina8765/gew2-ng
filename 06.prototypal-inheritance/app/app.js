(function () {
    angular.module('MyApp', ['MyAppControllers']);
    angular.module('MyApp').run(function ($rootScope) {
        $rootScope.title = 'Course for this month: ';
        $rootScope.name = "Getting better with AngularJs: Root Scope";
    });
})();

