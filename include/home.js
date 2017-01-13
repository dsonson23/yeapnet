var app = angular.module('yeapApp', ["angular-scroll-animate"]);

app.controller('homeCtrl', function($scope) {
$scope.animateElementIn = function($el) {
		$el.removeClass('not-visible');
		$el.addClass('ng-animated ' + $scope.animation.current);
	};

	$scope.animateElementOut = function($el) {
		$el.addClass('not-visible');
		$el.removeClass('ng-animated ' + $scope.animation.current);
	};    
});