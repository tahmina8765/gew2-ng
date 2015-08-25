(function () {
    var app = angular.module('StudentApp');
    app.factory('studentService', [function () {
            return {
                students:
                        [
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

                        ]
                ,
                newStudent: {
                    'name': ''
                    , 'email': ''
                    , 'phone': ''

                },
                clearForm: function () {
                    this.action = 'Add';
                    this.newStudent = {
                        'name': ''
                        , 'email': ''
                        , 'phone': ''
                    };
                },
                saveStudent: function (student, index) {
                    if (index || (index == 0)) {
                        this.students.index = student;
                    } else {
                        this.students.push(student);
                    }
                    return true;
                }
            };
        }]);
})();