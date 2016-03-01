app.factory('getPizza', ['$http', function($http) {
	return $http.get('http://localhost:3000/pizzas')
        .success(function(data) {
        	return data
        })
        .error(function(err) {
            return err;
        });

}]);
