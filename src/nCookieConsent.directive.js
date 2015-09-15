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

})();
