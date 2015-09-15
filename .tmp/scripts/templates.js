angular.module('nCookieConsent').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('nCookieConsent.template.html',
    "<div class=\"n-cookie-consent\" ng-style=\"cookieStyle\">\n" +
    "\t<div ng-bind-html=\"contentToBind\"></div>\n" +
    "\t<button ng-click=\"consentFunction()\">Ok!</button>\n" +
    "</div>"
  );

}]);
