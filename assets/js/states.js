angular.module('wpAngularTheme')
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('main',{
			url:'/',
			template: '<main></main>'
		})
		.state('about',{
			url:'/about',
			template: '<page id="11"></page>'
		})
		.state('awards',{
			url:'/awards',
			template: '<page id="17"></page>'
		})
		.state('resume',{
			url:'/resume',
			template: '<resume></resume>'
		})
		.state('list',{
			url:'/list',
			template: '<list></list>'
		})
		.state('single',{
			url:'/post/:slug',
			template: '<single></single>'
		})		
		.state('page',{
			url:'/page/:slug',
			template: '<page></page>'
		})	
		.state('contact',{
			url:'/contact',
			template: '<page id="15"></page>'
		})
		.state('aboutSite',{
			url:'/about-the-site',
			template: '<page id="13"></page>'
		})
})