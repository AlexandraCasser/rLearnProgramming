angular.module("main").factory('domain', ['$location', function ($location) {
	var host = $location.host();
	var dom;
	var loc = 0;
	host = host.split('.');
	
	if(host.length > 2){
		loc = 1;
	}
	dom = host[loc];
	dom += '.';
	dom += host[loc+1];
	return dom;
}]);