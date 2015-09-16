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

		function link(scope, element, attrs) {
			var e = document.querySelector('.n-cookie-consent');
			console.log(e);
			scope.consentHandler = scope.consentFunction();
			switch (scope.position) {
				case 'top':
					e.style.top = 0;
					break;
				case 'bottom':
					e.style.bottom = 0;
					break;
			}
		}

	}

})();
