app.factory('getPizza', ['$http', function($http) {
	return $http.get('https://pizzaserver.herokuapp.com/pizzas')
        .success(function(data) {
        	return data
        })
        .error(function(err) {
            return err;
        });

}]);
