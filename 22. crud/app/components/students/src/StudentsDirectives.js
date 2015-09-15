(function () {
    angular.module('App')
            .directive('studentProfile', function () {
                return {
                    restrict: 'EA', // EACM
                    templateUrl: 'components/directives/profile.html',
                    scope: {
                        title: "@title",
                        data: "=data"
                        
                    },
//                    transclude: true,
//                    replace: true,
                    link: function (scope, element, attr) {

                    },
                    controller: function ($scope) {
                        
                    }
                }

            })
            ;

})();