/**
 * 
 * @version v1.0.0 - 2015-09-16
 * @link 
 * @author krma
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {
	'use strict';

	angular.module('nCookieConsent', []);

})();

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
			console.log($scope);

			$scope.consentHandler = function() {
				console.log('save stuff now');
			}

		}

	}
	nCookieConsent.$inject = ["$filter"];

})();

angular.module('nCookieConsent').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('nCookieConsent.template.html',
    "<div class=\"n-cookie-consent\">\n" +
    "\t<div ng-bind-html=\"contentToBind\"></div>\n" +
    "\t<button class=\"n-cookie-consent__consentbtn\" ng-click=\"consentHandler()\">Ok!</button>\n" +
    "</div>"
  );

}]);
