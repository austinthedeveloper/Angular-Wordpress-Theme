angular.module('wpAngularTheme')
.component('list', {
	templateUrl: components + 'list/list.html',
	controller: ['$rootScope', 'Posts', 'Processing', function($rootScope, Posts, Processing){
		var vm = this;

		vm.refreshPosts = function(){
			Processing.on();
			Posts.query(function(res){
				Processing.off();
				vm.posts = res;
			});
		};
		vm.refreshPosts();

		vm.is_admin = $rootScope.is_admin;
		
		//EDITPOST
		vm.openPost = {};
		vm.editPost = function(post){
			vm.openPost = post;
			vm.openPost.newPost = false;
			//vm.openSaveModal();
			setTimeout(function(){
				tinymce.activeEditor.setContent(vm.openPost.content.rendered);
			},100);
		};
		
		//DELETEPOSTFUNCTION
		vm.deletePost = function(index,post){
			if(post.id){
				var deleteConf = confirm('Areyousureyouwanttodelete'+post.title.rendered);
				if(deleteConf){
					vm.posts.splice(index,1);
					Posts.delete({ID:post.id});
				}
			}
		};
		
		//SAVEPOSTFUNCTION
		vm.savePost = function(){	
			if(vm.openPost.newPost){
				vm.openPost.title  =  vm.openPost.title.rendered;
				vm.openPost.content  =  vm.openPost.content.rendered;
				Posts.save(vm.openPost,function(response){
					vm.openPost = {};
					vm.refreshPosts();
					vm.closeSaveModal();
				});
			}else{
				vm.openPost.title  =  vm.openPost.title.rendered;
				vm.openPost.content  =  vm.openPost.content.rendered;
				Posts.update(vm.openPost,function(res){
					vm.openPost = {};
					vm.refreshPosts();
					vm.closeSaveModal();
				});
			}
		};
		
		//ADDNEWPOST
		vm.addPost = function(){
			vm.openPost = {
				newPost:true,
				status:'publish'
			}
		}
		
		//CLEARFORMFUNCTION
		vm.clear = function(){
			vm.$root.openPost = false;
			jQuery('#save').modal('hide');
		};
		
		
		//SAVEMODALOPEN/COSE	
		vm.openSaveModal = function(){
			jQuery('#save').modal('show');
		}
		
		vm.closeSaveModal = function(){
			jQuery('#save').modal('hide');
		}
		
		//DATEFUNCTION
		vm.datify = function(date){
			vm.date = newDate(date);
			return vm.date.getDate()+'/'+vm.date.getMonth()+'/'+vm.date.getYear();
		};
		
	}]
})