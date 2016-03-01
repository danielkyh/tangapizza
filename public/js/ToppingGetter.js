app.factory('getTopping', ['$http', function($http) {
	return $http.get('http://localhost:3000/toppings')
        .success(function(data) {
        	return data
        })
        .error(function(err) {
            return err;
        });

}]);
