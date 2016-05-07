angular.module('wpAngularTheme')
.factory('PostsBySlug',function($resource){
	return $resource(ajaxInfo.api_url+'post_by_slug/:id',{
		id:'@id'
	});
})