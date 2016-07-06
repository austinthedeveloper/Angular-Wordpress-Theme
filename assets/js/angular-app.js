wpAng = typeof wpAng === 'undefined' ? {} : wpAng;

var directory = ajaxInfo.template_directory,
	buildUrl = directory + 'build/',
	views = directory + 'assets/views/',
	templates = directory + 'assets/templates/',
	components = directory + 'assets/components/';

wpAng.init = function(){

	wpAng.app = angular.module('wpAngularTheme',['ui.router', 'ngMaterial', 'ngAnimate', 'ngResource', 'ngSanitize', 'underscore', 'github', 'stackOverflow', 'angular.filter']);

	//RUNFUNC
	wpAng.app
	.run(['$rootScope', '$window', '$location', '$mdSidenav',
		function($rootScope, $window, $location, $mdSidenav){
			$rootScope.dir = directory;

			$rootScope.is_admin = ajaxInfo.is_admin;

			// Google Analytics Page Tracking
			$window.ga('create', 'UA-32307353-1', 'auto');
			$rootScope.$on('$stateChangeSuccess', function (event) {
				$mdSidenav('left').close();
				if (!$window.ga) return;
			    $window.ga('send', 'pageview', $location.path());
			});
	}])
};

wpAng.init();
