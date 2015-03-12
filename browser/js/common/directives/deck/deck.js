'use strict';
app.directive('deck', function($rootScope) {
  return {
    restrict: 'E',
    scope: {
      deck: "="
    },
    templateUrl: 'js/common/directives/deck/deck.html'
      // link: function(scope, element, attrs) {

    // }
  };
});