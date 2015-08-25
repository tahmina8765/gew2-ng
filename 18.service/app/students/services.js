(function () {
    var app = angular.module('StudentApp');
    app.service('studentService', [function () {
            var self = this;
            this.students = [
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
            
            this.action = 'Add';
            this.newStudent = {
                'name': ''
                , 'email': ''
                , 'phone': ''
            };

            this.clearForm = function () {
                this.action = 'Add';
                this.newStudent = {
                    'name': ''
                    , 'email': ''
                    , 'phone': ''
                };
            };


            this.saveStudent = function (student, index) {
                if (index || (index == 0)) {
                    this.students.index = student;
                }else{
                    this.students.push(student);
                }                
                return true;
            };   
            
            this.displayEmail = function(student){
                alert(student.email);
            };

        }]);
})();