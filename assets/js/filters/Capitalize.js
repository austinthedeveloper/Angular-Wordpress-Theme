angular.module('wpAngularTheme')
.filter('Capitalize',[function(){
	return function(input){
		var reg = /([^\W_]+[^\s-]*) */g;
      	return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
	};
}])