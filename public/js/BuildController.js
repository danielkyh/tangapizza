app.controller('BuildController', ['$scope', '$http', '$window', '$location', 'getPizza', 'getTopping', '$rootScope', function($scope, $http, $window, $location, getPizza, getTopping, $rootScope){

	//request pizzas
	getPizza.success(function(data){
		$rootScope.pizzas = data
	})

	//request toppings
	getTopping.success(function(data){
		$rootScope.toppings = data
	})



	//intialize selection variable
	$scope.pizzName = ""
	$scope.pizzDesc = ""
	$scope.currPizza = ""
	$scope.currTopp = ""
	$scope.newTopp = ""
//--------------------------------------------------



	//pizza builder 
	$scope.addPizza = function(){

		$http({
			url: 'https://pizzaserver.herokuapp.com/pizzas',
			method: 'POST',
			data: {pizza: {name: $scope.pizzName, description: $scope.pizzDesc}}
		})
		//redirect to full list on success
		.success(function(res){
			// Materialize.toast(message, displayLength, className, completeCallback);
			  Materialize.toast('Successfully added pizza!', 1500, 'light-blue darken-1') // 4000 is the duration of the toast
			// Push new created pizza to array
			  $rootScope.pizzas.push(res)
		})	

		.error(function(res){
			// Materialize.toast(message, displayLength, className, completeCallback);
			  Materialize.toast('Oops! Looks like there was an error!', 1500, 'deep-orange lighten-2') // 4000 is the duration of the toast
		})
	}



//--------------------------------------------------

	
	// add topping to existing pizza
	$scope.addPizzaTopping = function(){

		$http({
			url: 'https://pizzaserver.herokuapp.com/pizzas/' + $scope.currPizza + '/toppings',
			method: 'POST',
			data: {pizza_id: $scope.currPizza, topping_id: $scope.currTopp}
		})

		.success(function(res){
			// Materialize.toast(message, displayLength, className, completeCallback);
			  Materialize.toast('Successfully added topping to pizza!', 1500, 'light-blue darken-1') // 4000 is the duration of the toast
		})

		.error(function(res){
			// Materialize.toast(message, displayLength, className, completeCallback);
			  Materialize.toast('Oops! Looks like there was an error!', 1500, 'deep-orange lighten-2') // 4000 is the duration of the toast
		})
	}
//--------------------------------------------------
	// post request for new topping by user
	$scope.addTopping = function(){
		$http({
			url: 'https://pizzaserver.herokuapp.com/toppings',
			method: 'POST',
			data: {topping: {name: $scope.newTopp}}
		})

		.success(function(res){
			// Materialize.toast(message, displayLength, className, completeCallback);
			  Materialize.toast('Successfully added new topping!', 1500, 'light-blue darken-1') // 4000 is the duration of the toast
			  // push new item to exisitng array
			  $rootScope.toppings.push(res)
		})

		.error(function(res){
			// Materialize.toast(message, displayLength, className, completeCallback);
			  Materialize.toast('Oops! Looks like there was an error!', 1500, 'deep-orange lighten-2') // 4000 is the duration of the toast
		})
	}

}])



