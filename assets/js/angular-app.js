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
	.run(['$rootScope', '$window', '$location', function($rootScope, $window, $location){	
			$rootScope.dir = directory;
			$rootScope.tinymceOptions = {
				skin:'lightgray',
				height:300
			};
			
			$rootScope.is_admin = ajaxInfo.is_admin;
	
			// Google Analytics Page Tracking
			$window.ga('create', 'UA-32307353-1', 'auto');
			$rootScope.$on('$stateChangeSuccess', function (event) {
				if (!$window.ga) return;
			    $window.ga('send', 'pageview', $location.path());
			});
		}])
};

wpAng.init();