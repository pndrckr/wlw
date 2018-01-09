angular.module('weight_loss_war', ['ngRoute', 'RouteControllers', 'UserService']);

angular.module('weight_loss_war').config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
	})
	.when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
});