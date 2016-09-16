angular.module('coachingapp').controller('StudentsController', function($scope, resourceStudent) {

	$scope.students = [];
	$scope.filter = '';
	$scope.message = '';

	resourceStudent.query(function(students) {
		$scope.students = students;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(student) {

		resourceStudent.delete({studentId : student._id}, function() {
			var index = $scope.students.indexOf(student);
			$scope.students.splice(index, 1);
			$scope.message = 'Aluna(o) ' + student.name + ' foi removida(o) com sucesso';
		}, function(erro) {
			console.log(erro);
			$scope.message = 'Não foi possível remover a(o) aluna(o) ' + student.name;
		});
	};

});
