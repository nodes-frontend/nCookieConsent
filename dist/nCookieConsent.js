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
				'consentFunction': '&consentFunction'
			}
		};
		return directive;

		function link(scope, element) {
			console.log(scope);
			scope.consentHandler = scope.consentFunction();
			switch (scope.position) {
				case 'top':
					scope.cookieStyle = {'top':0};
					break;
				case 'bottom':
					scope.cookieStyle = {'bottom':0};
					break;
			}
		}

	}
	nCookieConsent.$inject = ["$filter"];

})();

angular.module('nCookieConsent').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('nCookieConsent.template.html',
    "<div class=\"n-cookie-consent\" ng-style=\"cookieStyle\">\n" +
    "\t<div ng-bind-html=\"contentToBind\"></div>\n" +
    "\t<button ng-click=\"consentFunction()\">Ok!</button>\n" +
    "</div>"
  );

}]);
