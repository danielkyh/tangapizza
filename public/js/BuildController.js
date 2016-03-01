app.controller('BuildController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location){

	// dummy data
	$scope.pizzas = ['Igor', 'Misko', 'Vojta']
	$scope.toppings = ['Pep', 'Mush', 'Saus']
	var pizza = {'pizza': {'name': "New Pizza", 'description': "newest pizza"}
	}

	//intialize selection variable
	$scope.pizzName = ""
	$scope.pizzDesc = ""
	$scope.currPizza = "None Selected"
	$scope.currTopp = "None Selected"

	$scope.addPizza = function(){

		$http({
			url: 'http://localhost:3000/pizzas',
			method: 'POST',
			data: {pizza: {name: $scope.pizzName, description: $scope.pizzDesc}}
		})

		.success(function(res){
			$window.location.href = "/#/"
		})	

		.error(function(res){
			console.log("failed!!!")
		})
	}

	// declare function to post to pizza toppings
	// var addPizzaTopping = function(){
	// 	pizza = {
	// 		pizza_id: $scope.currPizza.id,
	// 		topping_id: $scope.currTopp.id
	// 	}
	// }

}])