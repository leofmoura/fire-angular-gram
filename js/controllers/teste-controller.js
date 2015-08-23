(function () {
    angular.module('insta').controller('TesteCtrl', TesteCtrl);

    TesteCtrl.$inject = ['$scope'];

    function TesteCtrl($scope) {
		$scope.teste = "Leonardo";	
    }
})();
