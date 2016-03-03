app.controller('MainController', ['$scope', '$http', 'getPizza', 'getTopping', '$rootScope', function($scope, $http, getPizza, getTopping, $rootScope){

	//request pizzas
	getPizza.success(function(data){
		$rootScope.pizzas = data
	})

	//request toppings
	getTopping.success(function(data){
		$rootScope.toppings = data
	})
	$scope.showTopping = function(id){

		$http({
			method: 'GET',
			url: 'https://pizzaserver.herokuapp.com/pizzas/' + id + '/toppings'
		})

		.success(function(data){
			toppings = ""
			data.forEach(function(topping){
				toppings += topping.name + " "
			})
			if(toppings == ""){
				$('#pizza'+id).html("No toppings added!")
			}else{
				$('#pizza'+id).html(toppings)
			}
		})

		.error(function(err){
			console.log(err)
		})
	}
}])