angular.module('tinymce', []).factory('tinymce', ['$window', function($window) {
    return $window.tinymce; // assumes underscore has already been loaded on the page
}]);