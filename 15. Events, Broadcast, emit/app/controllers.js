(function () {
    var app = angular.module('SchoolApp');
    function StudentsController($scope, $log, $timeout) {
        $scope.newStudent = {
            'id': 0
            , 'name': ''
            , 'email': ''
            , 'phone': ''
        };

        $scope.courseInfo = {
            'name': 'Getting better with AngularJs',
            'point': 500
        };

        $scope.students = [
            {
                'id': 1
                , 'name': 'Raj Kapur Saha'
                , 'email': 'kapur.raj@genweb2.com'
                , 'phone': '8801717094921'
            }
            , {
                'id': 2
                , 'name': 'Ahad Ahmed'
                , 'email': 'ahmed.ahad@genweb2.com'
                , 'phone': '8801710451477'
            }
            , {
                'id': 3
                , 'name': 'Mohammad Golam Rabbi'
                , 'email': 'rabbi.golam@genweb2.com'
                , 'phone': '8801719359331'
            }
            , {
                'id': 4
                , 'name': 'Dola Chakraborty'
                , 'email': 'chakraborty.dola@genweb2.com'
                , 'phone': '8801823258558'
            }
            , {
                'id': 5
                , 'name': 'Mahmudul Hassan'
                , 'email': 'hassan.mahmudul@genweb2.com'
                , 'phone': '8801675729214'
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

        $scope.$watchCollection('courseInfo', function (newCollection, oldCollection) {
            console.log(newCollection);
            console.log(oldCollection);
            if (newCollection.point != oldCollection.point) {
                console.log('Collection has changed.');
            }
        });

        $scope.saveStudent = function (student) {
            var valid = true;
            if (valid) {
                student.id = $scope.students.length + 1;
                $scope.students.push(student);
                $scope.courseInfo.point = $scope.courseInfo.point + 100;
                $scope.newStudent = {
                    id: 0
                    , 'name': ''
                    , 'email': ''
                    , 'phone': ''
                };
            }

        };
    }
    ;
    app.controller("StudentsController", StudentsController);
    StudentsController.$inject = ["$scope", "$log", "$timeout"];
})();
