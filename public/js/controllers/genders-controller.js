angular.module('coachingapp').controller('GendersController', function($scope, resourceGender) {
	$scope.genders = [];

	resourceGender.query(function(genders) {
		$scope.genders = genders;
	}, function(erro){
		console.log(erro);
	});
});
