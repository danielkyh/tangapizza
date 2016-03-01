app.controller('MainController', ['$scope', '$http', 'getPizza', function($scope, $http, getPizza){

	// dummy data
	$scope.toppings = ['Pep', 'Mush', 'Saus']

	//request pizzas

	// $http({
	// 	method: 'GET',
	// 	url: 'http://localhost:3000/pizzas'
	// })

	// .success(function(res){
	// 	$scope.pizzas = res
	// 	console.log($scope.pizzas)
	// })
	getPizza.success(function(data){
		$scope.pizzas = data
	})
	// $scope.pizzas = getPizza.success
	console.log($scope.pizzas)

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