angular.module('coachingapp').controller('StudentController', function($scope, studentRegister, resourceStudent, $routeParams) {

	$scope.student = {};
	$scope.message = '';

	if($routeParams.studentId) {
		resourceStudent.get({studentId : $routeParams.studentId}, function(student) {
			$scope.student = student;
		}, function(erro) {
			console.log(erro);
			$scope.message = 'Não foi possível obter a(o) aluna(o)' ;
		});
	}

	$scope.submeter = function() {
		if($scope.formulario.$valid) {
			studentRegister.cadastrar($scope.student)
			.then(function(dados) {
				$scope.message = dados.message;
				if (dados.inclusao) $scope.student = {};
			})
			.catch(function(erro) {
				$scope.message = erro.message;
			});
		}
	};
});
