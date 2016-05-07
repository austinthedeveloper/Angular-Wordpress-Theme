angular.module('wpAngularTheme')
.factory('Posts',function($resource){
	return $resource(ajaxInfo.api_url+'posts/:ID',{
		ID:'@id'
	},{
		'update':{
			method:'PUT',
			headers: {
				'X-WP-Nonce': ajaxInfo.nonce
			}
		},
		'post':{
			method:'POST',
			headers: {
				'X-WP-Nonce': ajaxInfo.nonce
			}
		},
		'save':{
			method:'POST',
			headers: {
				'X-WP-Nonce': ajaxInfo.nonce
			}
		},
		'delete':{
			method:'DELETE',
			headers: {
				'X-WP-Nonce': ajaxInfo.nonce
			}
		}
	});
})