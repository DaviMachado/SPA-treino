var app = angular.module("app", ["ngRoute"]);

app.config(function($scope){
	$scope

		.when('/', {
			templateUrl: 'templates/home.html'
		})

		.when('/pagina1', {
			templateUrl: 'templates/p1.html'
		})

		.when('/pagina2', {
			templateUrl: 'templates/p2.html'
		})

		.when('/pagina3', {
			templateUrl: 'templates/p3.html'
		})

		.otherwise ({redirectTo : '/' });

});