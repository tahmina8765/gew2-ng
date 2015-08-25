(function () {
    var app = angular.module('SchoolApp');
    function MessageController($scope, $timeout) {
        var advertisements = [
            'Advertisement of Google'
            , 'Advertisement of Prothom Alo'
            , 'Advertisement of Daily Star'
            , 'Advertisement of Times'
            , 'Advertisement of Genweb2'
        ];

        $scope.displayAdvertisements = [];
        
        var timer;
        var count = 0;

        $scope.loadMessages = function () {
            count++;
            $scope.displayAdvertisements.push(                
                count + '.' + advertisements[Math.floor(Math.random() * advertisements.length)]
            );

            timer = $timeout($scope.loadMessages, 3000);
            
            if (count >= 3 && count < 5) {
                $scope.$broadcast('EVENT_NO_DATA', 'Warning', 'warning');                
            }
            if (count == 5) {
                $scope.$broadcast('EVENT_NO_DATA', 'Danger', 'danger');
                $timeout.cancel(timer);
            }
        };                
        
        timer = $timeout($scope.loadMessages, 3000);

        $scope.$on('EVENT_RECEIVED', function () {
            console.log('Received emitted event');
        });
    }
    ;

    app.controller("MessageController", MessageController);
    MessageController.$inject = ["$scope", "$timeout"];


})();
