angular.module('wpAngularTheme')
.component('single', {
	templateUrl: components + 'single/single.html',
	controller: ['Post', 'Processing',
	function(Post, Processing){
		var vm = this;

		Processing.on();

		Post.get()
		.then(
		function(res){
			vm.post = res;
			Processing.off();
		},
		function(err){
			console.log('error', err);
			Processing.off();
		});

	}]
})
