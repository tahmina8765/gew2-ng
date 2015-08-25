(function () {
    var app = angular.module('StudentApp');

    app.controller("NewStudentController", ["$scope", "$log", "$location", "$stateParams", "studentService", function NewStudentController($scope, $log, $location, $stateParams, studentService) {
            var index = ($stateParams.index) | false;

            $scope.students = studentService.students;
            $scope.saveStudent = function (student) {

                var result = studentService.saveStudent(student, index);
                if (result) {
                    $location.path("/students");
                } else {
                    alert('Invalid Form');
                }


            };
            if (index || (index == 0)) {
                var student = $scope.students[index];
                $scope.newStudent = student;
            }

            $scope.deleteStudent = function (student, index) {
                if (index > -1) {
                    $scope.students.splice(index, 1);
                }
                clearForm();
            };


        }]);

})();
