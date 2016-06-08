angular.module('wpAngularTheme')
.service('Processing',['$rootScope', function($rootScope){
	var vm = this;
	
	vm.on = on;
	vm.off = off;
	vm.toggle = toggle;

	function on(){
		$rootScope.processing = true;
	};
	function off(){
		$rootScope.processing = false;
	};
	function toggle() {
		$rootScope.processing = !$rootScope.processing;
	};
	
}])