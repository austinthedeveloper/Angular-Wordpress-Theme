angular.module('wpAngularTheme')
.component('processing', {
	templateUrl: components + 'processing/processing.html',
	controller: ['Processing', '$scope', '$rootScope', function(Processing, $scope, $rootScope) {
		var vm = this;

		$rootScope.$watch('processing', function(newVal) {
			vm.process = newVal;
		});
		
	}]
})