angular.module('wpAngularTheme')
.controller('listView',['$scope','Posts',function($scope,Posts){

	$scope.refreshPosts = function(){
		Posts.query(function(res){
			$scope.posts = res;
		});
	};
	$scope.refreshPosts();
	
	//EDITPOST
	$scope.openPost = {}
	$scope.editPost = function(post){
		$scope.openPost = post;
		$scope.openPost.newPost = false;
		//$scope.openSaveModal();
		setTimeout(function(){
			tinymce.activeEditor.setContent($scope.openPost.content.rendered);
		},100);
	};
	
	//DELETEPOSTFUNCTION
	$scope.deletePost = function(index,post){
		if(post.id){
			var deleteConf = confirm('Areyousureyouwanttodelete'+post.title.rendered);
			if(deleteConf){
				$scope.posts.splice(index,1);
				Posts.delete({ID:post.id});
			}
		}
	};
	
	//SAVEPOSTFUNCTION
	$scope.savePost = function(){	
		if($scope.openPost.newPost){
			$scope.openPost.title  =  $scope.openPost.title.rendered;
			$scope.openPost.content  =  $scope.openPost.content.rendered;
			Posts.save($scope.openPost,function(response){
				$scope.openPost = {};
				$scope.refreshPosts();
				$scope.closeSaveModal();
			});
		}else{
			$scope.openPost.title  =  $scope.openPost.title.rendered;
			$scope.openPost.content  =  $scope.openPost.content.rendered;
			Posts.update($scope.openPost,function(res){
				$scope.openPost = {};
				$scope.refreshPosts();
				$scope.closeSaveModal();
			});
		}
	};
	
	//ADDNEWPOST
	$scope.addPost = function(){
		$scope.openPost = {
			newPost:true,
			status:'publish'
		}
	}
	
	//CLEARFORMFUNCTION
	$scope.clear = function(){
		$scope.$root.openPost = false;
		jQuery('#save').modal('hide');
	};
	
	
	//SAVEMODALOPEN/COSE	
	$scope.openSaveModal = function(){
		jQuery('#save').modal('show');
	}
	
	$scope.closeSaveModal = function(){
		jQuery('#save').modal('hide');
	}
	
	//DATEFUNCTION
	$scope.datify = function(date){
		$scope.date = newDate(date);
		return $scope.date.getDate()+'/'+$scope.date.getMonth()+'/'+$scope.date.getYear();
	};
	
}])