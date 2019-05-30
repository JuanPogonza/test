var serviceModule = angular.module('serviceModule', []);

	serviceModule.factory('service', ['$http', function($http){
	return{
		getCompanies: function(){
			return $http.get('data/companies.json').then(function(response){
				return response.data.result.companies;
			})
		},
		getProducts: function(idCompany){
			return $http.get('data/products' + idCompany + '.json').then(function(response){
				return response.data.result.productos;
			})
		},
		getClients: function(idCompany){
			return $http.get('data/clients' + idCompany + '.json').then(function(response){
				return response.data.result.clients;
			})
		}
	}
}]);
