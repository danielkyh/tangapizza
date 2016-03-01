app.controller('MainController', ['$scope', '$http', function($scope, $http){

	// dummy data
	$scope.pizzas = ['Igor', 'Misko', 'Vojta']
	$scope.toppings = ['Pep', 'Mush', 'Saus']

	//request pizzas

	$http({
		method: 'GET',
		url: 'http://localhost:3000/pizzas'
	})

	.success(function(res){
		$scope.pizzas = res
		console.log($scope.pizzas)
	})

	//request toppings
	$http({
		method: 'GET',
		url: 'http://localhost:3000/toppings'
	})

	.success(function(res){
		$scope.toppings = res
		console.log($scope.toppings)
	})

}])