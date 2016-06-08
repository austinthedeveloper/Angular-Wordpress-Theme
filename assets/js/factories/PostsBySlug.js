angular.module('wpAngularTheme')
.factory('PostsBySlug',['$resource', function($resource){
	return $resource(ajaxInfo.api_url+'post_by_slug/:id',{
		id:'@id'
	});
}])