
(function () {
var app = angular.module('App');
app.service('popupService', function($window) {
    this.showPopup = function(message) {
        return $window.confirm(message);
    };
});
})();   
                     