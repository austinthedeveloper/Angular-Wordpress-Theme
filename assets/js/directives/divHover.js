angular.module('wpAngularTheme')
.directive('divHover', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attrs){

			var whiteframe = 'md-whiteframe-1dp',
				whiteframeHover = 'md-whiteframe-2dp';

			elem.addClass('div-hover ' + whiteframe);

			elem.on(
				{
					'mouseenter': function(){elem.addClass(whiteframeHover);},
					'mouseleave': function(){elem.removeClass(whiteframeHover);},
				});
		}
	}
})