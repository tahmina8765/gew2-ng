(function () {
    angular.module('MyAppControllers', []).controller('AuthorController', function ($scope) {
        $scope.name = "Tahmina Khatoon";
    }).controller('BookController', function ($scope) {
        $scope.name = "Getting better with AngularJS";
    });
})();


