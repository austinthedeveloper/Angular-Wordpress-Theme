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
			template: '<about></about>'
		})
		.state('awards',{
			url:'/awards',
			template: '<awards></awards>'
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
			template: '<contact></contact>'
		})
		.state('aboutSite',{
			url:'/about-the-site',
			template: '<about-site></about-site>'
		})
})