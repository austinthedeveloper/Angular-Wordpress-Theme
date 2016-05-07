angular.module('wpAngularTheme')
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('main',{
			url:'/',
			template: '<main></main>'
		})
		.state('list',{
			url:'/list',
			controller:'listView',
			templateUrl:views +'list.html'
		})
		.state('single',{
			url:'/post/:slug',
			controller:'singleView',
			templateUrl: views +'single.html'
		})
		.state('resume',{
			url:'/resume',
			template: '<resume></resume>'
		})
})