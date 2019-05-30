var testApp = angular.module('testApp', ['serviceModule', 'directiveModule']);

testApp.controller('testController', ['$scope', '$http', 'service', function($scope, $http, service){
	$scope.showDetail = function (company) {
		if(company != null){
			var id = company.id
		    if ($scope.active != id) {
		    	$scope.selectedCompany = company
		      	$scope.active = id;

		      	service.getProducts(id).then(function(response){
					$scope.products = response;
				})

				service.getClients(id).then(function(response){
					$scope.clients = response;
				})
		    }
		    else {
		      	$scope.active = null;
		    }
	    }
	    else {
      		$scope.active = null;
      	}
		    
 	};

 	service.getCompanies().then(function(response){
		$scope.companies = response;
	})
}])



