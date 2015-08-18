(function () {
    var app = angular.module('StudentApp');
    app.controller("ListController", ["$scope", "$log", "studentService", function ListController($scope, $log, studentService) {
            $scope.students = studentService.students;
            
            $scope.deleteStudent = function (student, index) {
                if (index > -1) {
                    $scope.students.splice(index, 1);
                }
            };


        }]);

})();
