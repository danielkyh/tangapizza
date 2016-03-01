var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){ $routeProvider
	.when('/',{
		controller: 'MainController',
		templateUrl: '../components/menu.html'
	})
	.when('/pizza',{
		controller: 'BuildController',
		templateUrl: '../components/pizzabuilder.html'
	})
	.when('/topping',{
		controller: 'BuildController',
		templateUrl: '../components/toppingbuilder.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})

