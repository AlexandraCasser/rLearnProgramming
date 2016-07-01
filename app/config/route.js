angular.module("main").config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {


$locationProvider
            .html5Mode({enabled: true, requireBase: true})
            .hashPrefix('!');

        $urlMatcherFactoryProvider.strictMode(false);

        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'app/partials/home.html',
                controller: 'mainController'
                
            })


}]);