(function () {
    var app = angular.module('StudentApp');
    function StudentsController($scope, $log) {
        $scope.newStudent = {
            'name': ''
            , 'email': ''
            , 'phone': ''
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
            , {
                'name': 'Invalid Student'
                , 'email': ''
                , 'phone': ''
            }

        ];

        $scope.displayEmailCount = 0;

        $scope.displayEmail = function (student) {
            if (student.email != '' && student.email.length > 0) {
                $scope.displayEmailCount++;
                alert(student.email);
            } else {
                $log.warn('Email is not available')
            }
        };
        
        $scope.$watch('displayEmailCount', function (newValue, oldValue) {
            console.log('called ' + newValue + ' times');
            if (newValue == 2) {
                alert('You have viewed two emails');                
            }
        });

        $scope.saveStudent = function (student) {
            console.log(student);
            $scope.students.push(student);
//            $scope.newStudent = {
//                'name': ''
//                , 'email': ''
//                , 'phone': ''
//            };
        };
    }
    ;
    app.controller("StudentsController", StudentsController);
    StudentsController.$inject = ["$scope", "$log"];
})();
