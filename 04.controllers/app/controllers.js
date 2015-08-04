function StudentsController($scope){
    $scope.students = [
        'Tahmina', 'Rita', 'Mehedi', 'Ajay'
    ];  
};
MainApp.controller("StudentsController", StudentsController);
StudentsController.$inject = ["$scope"];