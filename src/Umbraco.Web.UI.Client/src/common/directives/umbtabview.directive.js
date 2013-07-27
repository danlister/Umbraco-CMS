/**
* @ngdoc directive
* @name umbraco.directives.directive:umbTabView 
* @restrict E
**/
angular.module("umbraco.directives")
.directive('umbTabView', function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: 'true',
		templateUrl: 'views/directives/umb-tab-view.html'
	};
});