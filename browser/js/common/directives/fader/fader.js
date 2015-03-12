"use strict";
app.directive('fader', function($rootScope) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/common/directives/fader/fader.html'
  };
});