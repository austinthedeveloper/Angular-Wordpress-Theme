angular.module('wpAngularTheme')
.config(function ($locationProvider) {
    $locationProvider.hashPrefix('');
})	
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('main',{
			url:'/',
			template: '<main></main>'
		})
		.state('about',{
			url:'/about',
			template: '<page id="285"></page>'
		})
		.state('awards',{
			url:'/awards',
			template: '<page id="288"></page>'
		})
		.state('resume',{
			url:'/resume',
			template: '<resume></resume>'
		})
		.state('blog',{
			url:'/blog',
			template: '<blog></blog>'
		})
		.state('single',{
			url:'/post/:slug',
			template: '<single></single>'
		})
		.state('category',{
			url:'/post/category/:slug',
			template: '<category></category>'
		})
		.state('page',{
			url:'/page/:slug',
			template: '<page></page>'
		})
		.state('contact',{
			url:'/contact',
			template: '<page id="287"></page>'
		})
		.state('aboutSite',{
			url:'/about-the-site',
			template: '<about-the-site></about-the-site>'
		})
		.state('projects',{
			url:'/projects',
			template: '<projects></projects>'
		})
		.state('project',{
			url:'/project/:slug',
			template: '<project></project>'
		})
})
