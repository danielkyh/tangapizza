app.controller('MainController', ['$scope', '$http', 'getPizza', 'getTopping', function($scope, $http, getPizza, getTopping){

	//request pizzas
	getPizza.success(function(data){
		$scope.pizzas = data
	})

	//request toppings
	getTopping.success(function(data){
		$scope.toppings = data
	})

}])