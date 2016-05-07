angular.module('wpAngularTheme')
.factory('Comments',function($resource){
	return $resource(ajaxInfo.api_url+':ID/comments',{
		ID:'@id'
	},{
		'update':{method:'PUT'},
		'save':{
			method:'POST',
			headers: {
				'X-WP-Nonce': ajaxInfo.nonce
			}
		}
	});
})