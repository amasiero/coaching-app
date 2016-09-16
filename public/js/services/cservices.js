angular.module('cServices', ['ngResource'])
.factory('resourceStudent', function($resource) {

	return $resource('v1/students/:studentId', null, {
		update : {
			method : 'PUT'
		}
	});

})
.factory('resourceGender', function($resource) {
	return $resource('v1/gender');
})
.factory('studentRegister', function(resourceStudent, $q, $rootScope) {
	var servico = {};
	var evento = 'studentRegister';

	servico.cadastrar = function(student) {
		return $q(function(resolve, reject) {
			if(student._id) {
				resourceStudent.update({studentId : student._id}, student, function() {
					$rootScope.$broadcast(evento);
					resolve({
						message : 'Aluna(o) ' + student.name + ' alterada(o) com sucesso',
						inclusao : false
					});
				}, function(erro) {
					console.log(erro);
					reject({
						message : 'Não foi possível alterar a(o) aluna(o) ' + student.name
					});
				});
			} else {
				resourceStudent.save(student, function() {
					$rootScope.$broadcast(evento);
					resolve({
						message : 'Aluna(o) ' + student.name + ' incluída(o) com sucesso',
						inclusao : true
					});
				}, function(erro) {
					console.log(erro);
					reject({
						message : 'Não for possível incluir a(o) aluna(o) ' + student.name
					});
				});
			}
		});
	};

	return servico;
});
