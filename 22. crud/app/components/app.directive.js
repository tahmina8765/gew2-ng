(function () {
    angular.module('App')
            .directive('topMenu', function () {
                return {
                    templateUrl: 'components/directives/top-menu.html'
                };
            })
            .directive('footerDiv', function () {
                return {
                    templateUrl: 'components/directives/footer.html'
                };
            })
            ;
})();