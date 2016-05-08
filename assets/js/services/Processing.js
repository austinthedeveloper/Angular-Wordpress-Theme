angular.module('wpAngularTheme')
.service('Processing',['$rootScope', function($rootScope){
	var vm = this;
	vm.on = function(){
		$rootScope.processing = true;
	};
	vm.off = function(){
		$rootScope.processing = false;
	};
	vm.toggle = function() {
		$rootScope.processing = !$rootScope.processing;
	};
	
}])