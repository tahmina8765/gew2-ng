
(function () {

    var app = angular.module('App');
    app
            .controller('StudentsListController', function ($scope, $state, popupService, $window, Students) {
                $scope.data = Students.query();                
                $scope.deleteStudents = function (obj) {
                    if (popupService.showPopup('Really delete this?')) {
                        Students.remove({id: obj.id}, function () {
                            window.location.href = window.location.href;
                        });
                    }
                };
            })
            .controller('StudentsViewController', function ($scope, $stateParams, Students) {
                $scope.obj = Students.get({id: $stateParams.id});
            })
            .controller('StudentsCreateController', function ($scope, $state, $stateParams, Students) {
                $scope.obj = new Students();
                $scope.addStudents = function () {
                    $scope.obj.$save(function () {
                        $state.go('Students');
                    });
                };
            })
            .controller('StudentsEditController', function ($scope, $state, $stateParams, Students) {
                $scope.updateStudents = function () {
                    $scope.obj.$update(function () {
                        $state.go('Students');
                    });
                };
                $scope.loadStudents = function () {
                    $scope.obj = Students.get({id: $stateParams.id});
                };
                $scope.loadStudents();
            })
            ;
})();
                     