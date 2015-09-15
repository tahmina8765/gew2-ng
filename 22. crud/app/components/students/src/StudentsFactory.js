
(function () {
var app = angular.module('App');
app.factory('Students', function($resource, RestAPI) {
    return $resource(RestAPI.URL + '/students/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        },
        query: {
            method: 'GET',
            isArray: false
        }
    });
});
})();   
                     