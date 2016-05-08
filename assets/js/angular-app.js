wpAng = typeof wpAng === 'undefined' ? {} : wpAng;
var directory = ajaxInfo.template_directory;
var buildUrl = directory + 'build/';
var views = directory + 'assets/views/';
var templates = directory + 'assets/templates/';
var components = directory + 'assets/components/';

wpAng.init = function(){
	
	wpAng.app = angular.module('wpAngularTheme',['ui.router', 'ngMaterial', 'ngAnimate', 'ngResource', 'ngSanitize', 'ui.tinymce', 'underscore', 'github', 'stackOverflow', 'tinymce'])
	
	//FILTERS
	.filter('to_trusted',['$sce',function($sce){
		return function(text){
			return $sce.trustAsHtml(text);
		};	
	}])
	
	//RUNFUNC
	.run(function($rootScope){	
		$rootScope.dir = directory;
		$rootScope.tinymceOptions = {
			skin:'lightgray',
			height:300
		};
		
		$rootScope.is_admin = ajaxInfo.is_admin;
	})
};

wpAng.init();