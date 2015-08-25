(function () {
    var app = angular.module('StudentApp');
// ======================================================        
//     1. Using the inline array annotation (preferred)
// ======================================================        
    app.controller("StudentsControllerEx1", ["$scope", "$log", function StudentsController($scope, $log) {
        $scope.action = 'Add';
        $scope.newStudent = {
            'name': ''
            , 'email': ''
            , 'phone': ''
        };
        var clearForm = function () {
            $scope.action = 'Add';
            $scope.newStudent = {
                'name': ''
                , 'email': ''
                , 'phone': ''
            };
        };

        $scope.students = [
            {
                'name': 'Raj Kapur Saha'
                , 'email': 'kapur.raj@genweb2.com'
                , 'phone': '8801717094921'
            }
            , {
                'name': 'Ahad Ahmed'
                , 'email': 'ahmed.ahad@genweb2.com'
                , 'phone': '8801710451477'
            }
            , {
                'name': 'Mohammad Golam Rabbi'
                , 'email': 'rabbi.golam@genweb2.com'
                , 'phone': '8801719359331'
            }
            , {
                'name': 'Dola Chakraborty'
                , 'email': 'chakraborty.dola@genweb2.com'
                , 'phone': '8801823258558'
            }
            , {
                'name': 'Mahmudul Hassan'
                , 'email': 'hassan.mahmudul@genweb2.com'
                , 'phone': '8801675729214'
            }

        ];

        $scope.numLimit = 50;

        $scope.displayEmail = function (student) {
            if (student.email != '' && student.email.length > 0) {
                alert(student.email);
            } else {
                $log.warn('Email is not available')
            }

        };
        $scope.saveStudent = function (student) {
            if ($scope.action == 'Add') {
                $scope.students.push(student);
            }
            clearForm();
        };
        $scope.loadStudent = function (student, index) {
            clearForm();
            $scope.newStudent = student;
            $scope.action = 'Edit';
        };
        $scope.deleteStudent = function (student, index) {
            if (index > -1) {
                $scope.students.splice(index, 1);
            }
            clearForm();
        };


    }]);
        
// ======================================================            
//    2. Example of Using the $inject property annotation
// ======================================================        
//    function StudentsController($scope, $log) {
//        $scope.action = 'Add';
//        $scope.newStudent = {
//            'name': ''
//            , 'email': ''
//            , 'phone': ''
//        };
//        var clearForm = function () {
//            $scope.action = 'Add';
//            $scope.newStudent = {
//                'name': ''
//                , 'email': ''
//                , 'phone': ''
//            };
//        };
//
//        $scope.students = [
//            {
//                'name': 'Raj Kapur Saha'
//                , 'email': 'kapur.raj@genweb2.com'
//                , 'phone': '8801717094921'
//            }
//            , {
//                'name': 'Ahad Ahmed'
//                , 'email': 'ahmed.ahad@genweb2.com'
//                , 'phone': '8801710451477'
//            }
//            , {
//                'name': 'Mohammad Golam Rabbi'
//                , 'email': 'rabbi.golam@genweb2.com'
//                , 'phone': '8801719359331'
//            }
//            , {
//                'name': 'Dola Chakraborty'
//                , 'email': 'chakraborty.dola@genweb2.com'
//                , 'phone': '8801823258558'
//            }
//            , {
//                'name': 'Mahmudul Hassan'
//                , 'email': 'hassan.mahmudul@genweb2.com'
//                , 'phone': '8801675729214'
//            }
//
//        ];
//
//        $scope.numLimit = 50;
//
//        $scope.displayEmail = function (student) {
//            if (student.email != '' && student.email.length > 0) {
//                alert(student.email);
//            } else {
//                $log.warn('Email is not available')
//            }
//
//        };
//        $scope.saveStudent = function (student) {
//            if ($scope.action == 'Add') {
//                $scope.students.push(student);
//            }
//            clearForm();
//        };
//        $scope.loadStudent = function (student, index) {
//            clearForm();
//            $scope.newStudent = student;
//            $scope.action = 'Edit';
//        };
//        $scope.deleteStudent = function (student, index) {
//            if (index > -1) {
//                $scope.students.splice(index, 1);
//            }
//            clearForm();
//        };
//
//
//    };
//    app.controller("StudentsController", StudentsController);
//    StudentsController.$inject = ["$scope", "$log"];


// ======================================================        
//    3.  Implicitly from the function parameter names (has caveats)
// ======================================================        
//    app.controller("StudentsControllerEx2", function StudentsController($scope, $log) {
//        $scope.action = 'Add';
//        $scope.newStudent = {
//            'name': ''
//            , 'email': ''
//            , 'phone': ''
//        };
//        var clearForm = function () {
//            $scope.action = 'Add';
//            $scope.newStudent = {
//                'name': ''
//                , 'email': ''
//                , 'phone': ''
//            };
//        };
//
//        $scope.students = [
//            {
//                'name': 'Raj Kapur Saha'
//                , 'email': 'kapur.raj@genweb2.com'
//                , 'phone': '8801717094921'
//            }
//            , {
//                'name': 'Ahad Ahmed'
//                , 'email': 'ahmed.ahad@genweb2.com'
//                , 'phone': '8801710451477'
//            }
//            , {
//                'name': 'Mohammad Golam Rabbi'
//                , 'email': 'rabbi.golam@genweb2.com'
//                , 'phone': '8801719359331'
//            }
//            , {
//                'name': 'Dola Chakraborty'
//                , 'email': 'chakraborty.dola@genweb2.com'
//                , 'phone': '8801823258558'
//            }
//            , {
//                'name': 'Mahmudul Hassan'
//                , 'email': 'hassan.mahmudul@genweb2.com'
//                , 'phone': '8801675729214'
//            }
//
//        ];
//
//        $scope.numLimit = 50;
//
//        $scope.displayEmail = function (student) {
//            if (student.email != '' && student.email.length > 0) {
//                alert(student.email);
//            } else {
//                $log.warn('Email is not available')
//            }
//
//        };
//        $scope.saveStudent = function (student) {
//            if ($scope.action == 'Add') {
//                $scope.students.push(student);
//            }
//            clearForm();
//        };
//        $scope.loadStudent = function (student, index) {
//            clearForm();
//            $scope.newStudent = student;
//            $scope.action = 'Edit';
//        };
//        $scope.deleteStudent = function (student, index) {
//            if (index > -1) {
//                $scope.students.splice(index, 1);
//            }
//            clearForm();
//        };
//
//
//    });
})();
