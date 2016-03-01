var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){ $routeProvider
	.when('/',{
		controller: 'MainController',
		templateUrl: '../components/menu.html'
	})
	.when('/build',{
		controller: 'BuildController',
		templateUrl: '../components/builder.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})