app.controller('BuildController', ['$scope', '$http', '$window', '$location', 'getPizza', 'getTopping', function($scope, $http, $window, $location, getPizza, getTopping){

	//request pizzas
	getPizza.success(function(data){
		$scope.pizzas = data
	console.log($scope.pizzas)
	})

	//request toppings
	getTopping.success(function(data){
		$scope.toppings = data
	console.log($scope.toppings)
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
		})	

		.error(function(res){
			// Materialize.toast(message, displayLength, className, completeCallback);
			  Materialize.toast('Oops! Looks like there was an error!', 1500, 'deep-orange lighten-2') // 4000 is the duration of the toast
		})
	}



//--------------------------------------------------

	
	// declare function to post to pizza toppings
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
			  Materialize.toast('Successfully added newtopping!', 1500, 'light-blue darken-1') // 4000 is the duration of the toast
		})

		.error(function(res){
			// Materialize.toast(message, displayLength, className, completeCallback);
			  Materialize.toast('Oops! Looks like there was an error!', 1500, 'deep-orange lighten-2') // 4000 is the duration of the toast
		})
	}

}])



