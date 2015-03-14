'use strict';

app.controller('SearchCtrl', function($scope, AudioFactory) {
  // $scope.search = AudioFactory.search();
});

app.directive('deck2', function(AudioFactory) {
  return {
    restrict: 'E',
    scope: {
      search: "&"
    },
    templateUrl: 'js/common/directives/deck/deck2.html'
      // link: function(scope, element, attrs) {
      //   scope.search = AudioFactory.search();
      // }
  };
});