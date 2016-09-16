angular.module('coachingapp', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'cServices'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/students', {
		templateUrl: 'partials/main.html',
		controller: 'StudentsController'
	});

	$routeProvider.when('/students/new', {
		templateUrl: 'partials/student.html',
		controller: 'StudentController'
	});

	$routeProvider.when('/students/edit/:studentId', {
		templateUrl: 'partials/student.html',
		controller: 'StudentController'
	});

	$routeProvider.otherwise({redirectTo: '/students'});

});
