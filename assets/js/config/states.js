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
			template: '<list></list>'
		})
		.state('single',{
			url:'/post/:slug',
			template: '<single></single>'
		})
		.state('resume',{
			url:'/resume',
			template: '<resume></resume>'
		})
})