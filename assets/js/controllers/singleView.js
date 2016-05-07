angular.module('wpAngularTheme')
.controller('singleView',['$scope','$stateParams','PostsBySlug','Comments',function($scope,$stateParams,PostsBySlug,Comments){
		
	PostsBySlug.get($stateParams,function(res){
		$scope.post = res.post;
	});
	
	$scope.savecomment = function(){
		$scope.openComment.post = $scope.post.ID;
		Comments.save($scope.openComment,function(res){
			if( res.id ) {
				$scope.openComment = {};
				$scope.openComment.post = $scope.post.ID;
				PostsBySlug.get($stateParams,function(res){
					$scope.post = res.post;
				});
			}
		});
	}
	
}])