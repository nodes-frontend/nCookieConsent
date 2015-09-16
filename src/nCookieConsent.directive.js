(function () {
	'use strict';

	angular
		.module('nCookieConsent')
		.directive('nCookieConsent', nCookieConsent);

	/* @ngInject */
	function nCookieConsent($filter) {

		var directive = {
			restrict: 'EA',
			link: link,
			templateUrl: 'src/nCookieConsent.template.html',
			scope: {
				'position':'@',
				'contentToBind': '=',
				'consentCookieName':'@',
				'expiration': '='
			},
			controller: cookieController
		};
		return directive;

		function link(scope, element, attrs) {

			var e = document.querySelector('.n-cookie-consent');

			switch (scope.position) {
				case 'top':
					e.style.top = 0;
					break;
				case 'bottom':
					e.style.bottom = 0;
					break;
			}
		}
		function cookieController($scope, $cookies) {

			$scope.consentHandler = function() {
				$cookies.put($scope.consentCookieName, true, {expires: $scope.expiration});
			}

		}

	}

})();
