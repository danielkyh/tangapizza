app.factory('getTopping', ['$http', function($http) {
	return $http.get('https://pizzaserver.herokuapp.com/toppings')
        .success(function(data) {
        	return data
        })
        .error(function(err) {
            return err;
        });

}]);
