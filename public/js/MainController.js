app.controller('MainController', ['$scope', '$http', 'getPizza', 'getTopping', function($scope, $http, getPizza, getTopping){

	//request pizzas
	getPizza.success(function(data){
		$scope.pizzas = data
	})

	//request toppings
	getTopping.success(function(data){
		$scope.toppings = data
	})
	console.log('welcome back')
	$scope.showTopping = function(id){
		console.log($('#pizza'+id))

		$http({
			method: 'GET',
			url: 'http://localhost:3000/pizzas/' + id + '/toppings'
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