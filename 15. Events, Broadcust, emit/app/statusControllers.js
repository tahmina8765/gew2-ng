(function () {
    var app = angular.module('SchoolApp');    
    function StatusController($scope) {        
        $scope.status = 'Connected';
        $scope.statusLabel = 'primary';
        $scope.$on('EVENT_NO_DATA', function (event, data, label) {
            console.log('received broadcasted event');
            $scope.status = data;
            $scope.statusLabel = label;
            $scope.$emit('EVENT_RECEIVED');
        });
    }
    ;
    
    app.controller("StatusController", StatusController);
    StatusController.$inject = ["$scope"];


})();
