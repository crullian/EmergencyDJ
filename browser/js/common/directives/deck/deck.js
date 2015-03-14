'use strict';

app.controller('SearchCtrl', function($scope, AudioFactory) {
  // $scope.search = AudioFactory.search();
});

app.directive('deck', function(AudioFactory) {
  return {
    restrict: 'E',
    scope: {
      search: "&"
    },
    templateUrl: 'js/common/directives/deck/deck.html'
      // link: function(scope, element, attrs) {
      //   scope.search = AudioFactory.search();
      // }
  };
});